import { Int, VarChar, Date, Decimal } from 'mssql/msnodesqlv8'

export const INTEGER = Int
export const STRING = VarChar(255)
export const DATE = Date
export const FLOAT = Decimal
