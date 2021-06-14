import sql from 'mssql/msnodesqlv8'
import { bulkInsert } from './bulkInsert'
import { formatMonth } from './formatMonth'

export const writeDNE = async ({ model, months, data }) => {
  await Promise.all(
    months.map((month) => {
      const request = new sql.Request()
      return request.query(`DELETE FROM ${model.tableName} WHERE month='${formatMonth(month)}';`)
    })
  )
  return await bulkInsert({ rows: data, model })
}
