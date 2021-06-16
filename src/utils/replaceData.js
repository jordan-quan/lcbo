import sql from 'mssql/msnodesqlv8'
import { bulkInsert } from './bulkInsert'

export const replaceData = async ({ tableName, data, winery, month }) => {
  try {
    const request = new sql.Request(sql.globalConnection)
    await request.query(
      `DELETE FROM ${tableName} WHERE winery='${winery}' AND month='${month}';`
    )

    return await bulkInsert({ rows: data, tableName })
  } catch (e) {
    console.log(`Error replacing data: ${e}`)
  }
}
