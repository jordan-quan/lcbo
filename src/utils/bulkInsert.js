import sql from 'mssql/msnodesqlv8'
import { parseValues } from './parseValues'

export const bulkInsert = async ({ rows, model, batchSize = 50 }) => {
  if (rows.length === 0) return null

  const keys = `INSERT INTO ${model.tableName} (${Object.keys(rows[0]).join()}) VALUES`

  // split array into chunks
  const chunks = [...Array(Math.ceil(rows.length / batchSize))].map((_) =>
    rows.splice(0, batchSize)
  )

  // convert each chunk into an insert query
  const queries = chunks.map((chunk) => {
    const values = chunk
      .reduce((acc, row) => `${acc}(${parseValues(row, model.columns)}),`, '')
      .slice(0, -1)

    return `${keys} ${values};`
  })

  const promises = queries.map((query) => {
    const request = new sql.Request(sql.globalConnection)
    return request.query(query)
  })

  return Promise.all(promises)
}
