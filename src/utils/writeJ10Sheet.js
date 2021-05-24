import XLSX from 'xlsx'
import { CONTAINER_DEPOSITS } from '../constants/sheetNames'
import { zip, replaceData } from './'

export const writeJ10Sheet = ({ sheetInfo, workbook, month, winery }) => {
  const { name, outputSheets } = sheetInfo
  const ws = workbook.Sheets[name]
  const data = XLSX.utils.sheet_to_json(ws, { header: 1 })

  const promises = outputSheets.map(({ name, categories, rows, columnNames, model }) => {
    let content = data.slice(...rows)

    if (name !== CONTAINER_DEPOSITS) {
      content = content.map((row) => {
        const values = row.filter((cell) => !!cell || cell === 0)
        return { winery, month, ...zip(columnNames, values) }
      })
    } else {
      const container = []

      content.forEach((row, index) => {
        const { label, end } = categories.find(({ end }) => index <= end || end === undefined)
        if (index !== end) {
          const values = row.filter((cell) => !!cell || cell === 0)
          container.push({ winery, month, label, ...zip(columnNames, values) })
        }
      })

      content = container
    }

    // write sheet
    return replaceData({ model, data: content, month, winery })
  })

  return Promise.all(promises)
}
