export const bulkInsert = async ({ rows, tableName, pool, batchSize = 50 }) => {
  // split array into chunks
  const chunks = [...Array(Math.ceil(rows.length / batchSize))].map((_) =>
    rows.splice(0, batchSize)
  )

  // convert each chunk into an insert query
  const keys = `INSERT INTO '${tableName}' ('id','${Object.keys(rows[0]).join("','")}') VALUES`
  const queries = chunks.map((chunk) => {
    const values = chunk
      .reduce((acc, row) => `${acc} ('${Object.values(row).join("','")}'),`, '')
      .slice(0, -1)

    return `${keys} ${values};`
  })

  const promises = queries.map((query) => pool.query(query))

  return Promise.all(promises)
}
