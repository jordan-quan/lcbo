import XLSX from 'xlsx'
import { CONTAINER_DEPOSITS } from '../constants/sheetNames'
import { zip, replaceData } from './'

export const writeJ10Sheet = ({ sheetInfo, workbook, month, winery }) => {
  const { name, outputSheets } = sheetInfo
  const ws = workbook.Sheets[name]
  let data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null })

  const promises = outputSheets.map(
    ({ name, header, categories, endHeader, columnNames, model }) => {
      const startIndex = data.findIndex((row) => header.test(row[1]))
      if (startIndex === -1) return Promise.resolve()
      const start = data.slice(startIndex)
      const totalIndex = start.findIndex((row) => endHeader.test(row[1]))
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
            const values = [label,...row.filter((cell) => !!cell || cell === 0)]
            container.push({
              winery,
              month,
              ...zip(columnNames, values)
            })
          }
        })

        content = container
      }

      // write sheet
      return replaceData({ model, data: content, month, winery })
    }
  )

  return Promise.all(promises)
}
