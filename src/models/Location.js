import Cols from '../constants/columns/LocationColumns'
import * as DataTypes from '../constants/dataTypes'

export const Location = {
  tableName: 'location',
  columns: {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    month: {
      type: DataTypes.DATE
    },

    winery: {
      type: DataTypes.STRING
    },
    [Cols.locationType]: {
      type: DataTypes.STRING
    },
    [Cols.totalLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalValue]: {
      type: DataTypes.FLOAT
    }
  }
}
