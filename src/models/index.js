import mssql from 'mssql/msnodesqlv8'
import { CREATE_SCRIPTS } from '../constants/migration'
const pool = new mssql.ConnectionPool({
  database: 'FI_WINERY_SALES',
  server: 'csg093\\csg',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
})

export const setup = async () => {
  try {
    await pool.connect()
    const sql = new mssql.Request(pool)

    await Promise.all(
      Object.keys(CREATE_SCRIPTS).map((key) => sql.query(CREATE_SCRIPTS[key]))
    )

    return {pool, sql}
  } catch (e) {
    console.log('Database Error: ', e)
  }
}
