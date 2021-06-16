import sql from 'mssql/msnodesqlv8'
import { bulkInsert } from './bulkInsert'

export const replaceData = async ({ model, data, winery, month }) => {
  try {
    const request = new sql.Request(sql.globalConnection)
    await request.query(
      `DELETE FROM ${model.tableName} WHERE winery='${winery}' AND month='${month}';`
    )

    return await bulkInsert({ rows: data, model })
  } catch (e) {
    console.log(`Error replacing data: ${e}`)
  }
}
