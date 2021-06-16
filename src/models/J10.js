import Cols from '../constants/columns/J10Columns'
import * as DataTypes from '../constants/dataTypes'

export const J10 = {
  tableName: 'j10',
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
    [Cols.salesChannel]: {
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
