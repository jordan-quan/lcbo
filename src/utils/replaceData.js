import { bulkInsert } from './bulkInsert'

export const replaceData = async ({ tableName, data, pool, winery, month }) => {
  try {
    await pool.query(`DELETE FROM ${tableName} WHERE winery='${winery}' AND month='${month}';`)

    return await bulkInsert({ rows: data, tableName, pool })
  } catch (e) {
    console.log(`Error replacing data: ${e}`)
  }
}
