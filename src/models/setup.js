import sql from 'mssql/msnodesqlv8'
const pool = new sql.ConnectionPool({
  database: 'FI_WINERY_SALES',
  server: 'csg093\\csg',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
})

export const setup = async () => {
  try {
    return await pool.connect()
  } catch (e) {
    console.log('Database Error: ', e)
  }
}
