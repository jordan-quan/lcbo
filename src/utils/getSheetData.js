import { zip } from './zip'
import XLSX from 'xlsx'

export const getSheetData = ({ sheetInfo, workbook, month, winery }) => {
  const { startRow, startCol, filterColumn, name, columnNames } = sheetInfo
  const ws = workbook.Sheets[name]
  const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null })

  return data
    .slice(startRow)
    .filter((row) => !!row[filterColumn] || row[filterColumn] === undefined)
    .map((row) => ({ ...zip(columnNames, row.slice(startCol)), winery, month }))
}
