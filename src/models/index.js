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
    await pool.connect()
    const request = new sql.Request(pool);

    const query = `SELECT [FirstName]
      ,[LastName]
      ,[Email]
  FROM [Dev].[Users]`;
  
    const result = await request.query(query);
  
    console.dir(result);

  } catch (e) {
    console.log('Database Error: ', e)
  }
}
