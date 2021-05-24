const { PGDATABASE, PGHOST, PGUSER, PGPASSWORD } = process.env

export default {
  // PostgreSQL
  DB_NAME: PGDATABASE || 'postgres',
  DB_HOST: PGHOST || 'localhost',
  DB_USER: PGUSER || undefined,
  DB_PASSWORD: PGPASSWORD || undefined
}
