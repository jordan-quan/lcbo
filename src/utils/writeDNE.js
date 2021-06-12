import { bulkInsert } from './bulkInsert'
import { formatMonth } from './formatMonth'

export const writeDNE = async ({ tableName, months, data, pool }) => {
  await Promise.all(
    months.map((month) =>
      pool.query(`DELETE FROM ${tableName} WHERE month='${formatMonth(month)}';`)
    )
  )
  return await bulkInsert({ rows: data, tableName, pool })
}
