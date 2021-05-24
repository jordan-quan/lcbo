import fs from 'fs'
import { formatMonth } from './formatMonth'

const getWorkingExtension = (path) => {
  const extenstions = ['xls', 'xlsx', 'xlsm']
  return extenstions.find((extension) => fs.existsSync(`${path}.${extension}`))
}

// gets files from reports folder with target month
// reportsFolder: string (parent folder to search for files)
// extenstions: [ string ] (list of valid file extentions)
// month: string (target month)
// return [ string ] (list of valid filepaths)
/**
 * This is the find files function
 * @param {String} folder
 * @param {Array} months
 * @return {Object} files: { path, winery, month} dne: {winery, month}
 */
export const findFiles = (folder, months, filter) => {
  const foldernames = fs.readdirSync(folder)

  const files = []
  const dne = []

  foldernames
    .filter((x) => !filter.test(x))
    .forEach((foldername) => {
      const testFiles = months.map((month) => ({
        file: `${folder}/${foldername}/${foldername}${month}`,
        month
      }))

      testFiles.forEach(({ file, month }) => {
        const extension = getWorkingExtension(file)
        if (extension)
          files.push({
            path: `${file}.${extension}`,
            winery: foldername,
            month: formatMonth(month)
          })
        else dne.push({ winery: foldername, month: formatMonth(month) })
      })
    })

  return { files, dne }
}
