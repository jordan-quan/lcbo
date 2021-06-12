import sql from 'mssql/msnodesqlv8'
import { CREATE_SCRIPTS } from '../constants/migration'
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
    await pool.connect()
    const request = new sql.Request(pool)

    await Promise.all(
      Object.keys(CREATE_SCRIPTS).map((key) => await request.query(CREATE_SCRIPTS[key]))
    )

    return request
  } catch (e) {
    console.log('Database Error: ', e)
  }
}
