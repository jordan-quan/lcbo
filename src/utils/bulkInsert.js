const join = (object) => {
  const keys = Object.keys(object)
  return keys.reduce((acc, key, index) => {
    const value = object[key]
    let end = ','
    if (index === keys.length - 1) end = ''
   // if (key === 'month') return `${acc}${value}${end}`
    return `${acc}'${value}'${end}`
  }, '')
}

export const bulkInsert = async ({ rows, tableName, sql, batchSize = 50 }) => {

  if(rows.length === 0) return null

  const keys = `INSERT INTO ${tableName} (${Object.keys(rows[0]).join()}) VALUES`

  // split array into chunks
  const chunks = [...Array(Math.ceil(rows.length / batchSize))].map((_) =>
    rows.splice(0, batchSize)
  )

  // convert each chunk into an insert query
  const queries = chunks.map((chunk) => {
    const values = chunk
      .reduce((acc, row) => {
      //  row.month = `CAST('${row.month}' AS DATE)`
       return  `${acc}(${join(row)}),`
      }, '')
      .slice(0, -1)

    return `${keys} ${values};`
  })

  console.log(tableName, queries)


  const promises = queries.map((query) => sql.query(query))

  return Promise.all(promises)
}
