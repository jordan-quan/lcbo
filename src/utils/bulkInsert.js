import sql from 'mssql/msnodesqlv8'

export const bulkInsert = async ({ rows, model }) => {
  const { tableName, columns } = model
  const table = new sql.Table(tableName)
  table.create = true

  Object.keys(columns).forEach((key) => {
    const { type, ...options } = columns[key]
    table.columns.add(key, type, options)
  })

  rows.forEach((row) => table.rows.add(...Object.values(row)))

  const request = new sql.Request()
  return request.bulk(table)
}
