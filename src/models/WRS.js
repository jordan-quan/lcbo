import Cols from '../constants/columns/WRSColumns'
import * as DataTypes from '../constants/dataTypes'

export const WRS = {
  tableName: 'wrs',
  columns: {
    id: {
      type: DataTypes.INTEGER,
      primary: true,
      autoIncrement: true,
      nullable: false
    },

    month: {
      type: DataTypes.DATE
    },

    winery: {
      type: DataTypes.STRING
    },
    [Cols.productType]: {
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
