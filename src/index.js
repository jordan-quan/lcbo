import XLSX from 'xlsx'
import config from './config'
import { findFiles, writeFileData, writeDNE } from './utils'
import { setup, models } from './models'

// main
;(async () => {
  await setup()

  const { reportsFolderPath, targetMonths, excludeFoldersRegex } = config

  console.time('runtime')

  console.time('collected files')
  const { files, dne } = findFiles(reportsFolderPath, targetMonths, excludeFoldersRegex)
  console.log('dne: ', dne)
  console.timeEnd('collected files')
  console.log('\n')

  await writeDNE({ model: models.MissingReports, months: targetMonths, data: dne })

  console.time('uploaded data')
  await Promise.all(
    files.map(({ path, winery, month }) => {
      try {
        const workbook = XLSX.readFile(path)
        console.log(path)
        return writeFileData({ workbook, month, winery })
      } catch (e) {
        console.error(`Error: ${e}`)
      }
    })
  )
  console.timeEnd('uploaded data')
  console.log('\n')

  console.timeEnd('runtime')
})()
