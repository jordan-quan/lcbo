import { bulkInsert } from './bulkInsert'

export const replaceData = async ({ tableName, data, sql, winery, month }) => {
  try {
    console.log(tableName)
    await sql.query(`DELETE FROM ${tableName} WHERE winery='${winery}' AND month='${month}';`)

    return await bulkInsert({ rows: data, tableName, sql })
  } catch (e) {
    console.log(`Error replacing data: ${e}`)
  }
}
