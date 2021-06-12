import XLSX from 'xlsx'
import { CONTAINER_DEPOSITS } from '../constants/sheetNames'
import { zip, replaceData } from './'

export const writeJ10Sheet = ({ sheetInfo, workbook, month, winery, pool }) => {
  const { name, outputSheets } = sheetInfo
  const ws = workbook.Sheets[name]
  let data = XLSX.utils.sheet_to_json(ws, { header: 1 })

  const promises = outputSheets.map(
    ({ name, header, categories, endHeader, columnNames, tableName }) => {
      const start = data.slice(data.findIndex((row) => row[1] === header))
      const totalIndex = start.findIndex((row) => row[1] === endHeader)
      let content = start.slice(1, totalIndex)
      data = start.slice(totalIndex)

      if (name !== CONTAINER_DEPOSITS) {
        content = content.map((row) => {
          const values = row.filter((cell) => !!cell || cell === 0)
          return { winery, month, ...zip(columnNames, values) }
        })
      } else {
        const container = []
        content.forEach((row, index) => {
          const { label, end } = categories.find(({ end }) => index <= end || end === undefined)
          if (index !== end && index !== 0 && row[1] !== 'Subtotal') {
            const values = row.filter((cell) => !!cell || cell === 0)
            container.push({ winery, month, label, ...zip(columnNames, values) })
          }
        })

        content = container
      }

      // write sheet
      return replaceData({ tableName, data: content, month, winery, pool })
    }
  )

  return Promise.all(promises)
}
