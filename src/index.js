import XLSX from 'xlsx'
import config from './config'
import { findFiles, writeFileData, writeDNE } from './utils'
import { setup } from './models'

// main
;(async () => {
  const {pool, sql} = await setup()

  const { reportsFolderPath, targetMonths, excludeFoldersRegex } = config

  console.time('runtime')

  console.time('collected files')
  const { files, dne } = findFiles(reportsFolderPath, targetMonths, excludeFoldersRegex)
  console.log('dne: ', dne)
  console.timeEnd('collected files')
  console.log('\n')

  await writeDNE({ tableName: 'missing_reports', months: targetMonths, data: dne, sql })

  console.time('uploaded data')
  await Promise.all(
    files.map(({ path, winery, month }) => {
      try {
        const workbook = XLSX.readFile(path)
        console.log(path)
        return writeFileData({ workbook, month, winery, sql })
      } catch (e) {
        console.error(`Error: ${e}`)
      }
    })
  )
  console.timeEnd('uploaded data')
  console.log('\n')

  console.timeEnd('runtime')

  pool.close()
})()
