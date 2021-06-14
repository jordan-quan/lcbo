import { bulkInsert } from './bulkInsert'
import { formatMonth } from './formatMonth'

export const writeDNE = async ({ tableName, months, data, sql }) => {
  await Promise.all(
    months.map((month) =>{
      const query = `DELETE FROM ${tableName} WHERE month='${formatMonth(month)}';`
      sql.query(query)
    }
    )
  )
  try {
  return await bulkInsert({ rows: data, tableName, sql })
  } catch(e){
    console.log('Error inserting:', e)
  }
  
}
