import { sheets } from '../constants/sheets'
import { getSheetData, writeJ10Sheet, replaceData } from './'

// array of promises to write each sheet
export const writeFileData = ({ workbook, winery, month, sql }) => {
  try {
    const promises = sheets.map((sheetInfo) => {
      if (sheetInfo.name !== 'LCB J10') {
        const content = getSheetData({ workbook, sheetInfo, winery, month })
        return replaceData({ tableName: sheetInfo.tableName, data: content, winery, month, sql })
      } else {
        return writeJ10Sheet({ workbook, sheetInfo, winery, month, sql })
      }
    })
    return Promise.all(promises)
  } catch (e) {
    console.log('error uploading file: ', e)
  }
}
