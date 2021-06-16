import sql from 'mssql/msnodesqlv8'

const join = (object) => {
  const keys = Object.keys(object)
  return keys.reduce((acc, key, index) => {
    if (key === 'ignore') return acc
    const value = object[key]
    let end = ','
    if (index === keys.length - 1) end = ''
    if (value === undefined) return `${acc}null${end}`
    if (value === null || typeof value === 'number') return `${acc}${value}${end}`
    if (key === 'licensee_type') return `${acc}'${value}'${end}`
    if (typeof value === 'string') {
      if(value.indexOf("'") !== -1) return `${acc}'${value.replace("'", '')}'${end}` 
      if(value.indexOf("`") !== -1) return `${acc}'${value.replace("`", '')}'${end}` 
  }
    if (value.charAt(0) === '.') `${acc}${parseFloat(value)}${end}`
    return `${acc}'${value}'${end}`
  }, '')
}

export const bulkInsert = async ({ rows, tableName, batchSize = 50 }) => {

  if(rows.length === 0) return null

  const {ignore, ...headers} = rows[0]

  const keys = `INSERT INTO ${tableName} (${Object.keys(headers).join()}) VALUES`

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

 


  const promises = queries.map((query) => { 
    const request = new sql.Request(sql.globalConnection)
    return request.query(query)
  })

  return Promise.all(promises)
}
