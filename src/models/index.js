import sql from 'mssql/msnodesqlv8'
import { CREATE_SCRIPTS } from '../constants/migration'
const connection = new sql.ConnectionPool({
  database: 'FI_WINERY_SALES',
  server: 'csg093\\csg',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
})

export const setup = async () => {
  try {
    const pool = await connection.connect()

    await Promise.all(
      Object.keys(CREATE_SCRIPTS).map((key) => {
        const request = new sql.Request(pool)
        return request.query(CREATE_SCRIPTS[key])})
    )

    sql.globalConnection = pool

  } catch (e) {
    console.log('Database Error: ', e)
  }
}
