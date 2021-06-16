import sql from 'mssql/msnodesqlv8'
import { bulkInsert } from './bulkInsert'
import { formatMonth } from './formatMonth'

export const writeDNE = async ({ tableName, months, data }) => {
  await Promise.all(
    months.map((month) => {
      try {
        const request = new sql.Request(sql.globalConnection)
        return request.query(`DELETE FROM ${tableName} WHERE month='${formatMonth(month)}';`)
      } catch (e){
        console.log('Error here: ', e)
      }
    })
  )
  try {
  return await bulkInsert({ rows: data, tableName })
  } catch(e){
    console.log('Error inserting:', e)
  }
  
}
