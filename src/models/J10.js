import Cols from '../constants/columns/J10Columns'

const J10 = (sequelize, DataTypes) => {
  return sequelize.define(
    'J10',
    {
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
      [Cols.salesChannel]: {
        type: DataTypes.STRING
      },
      [Cols.totalLitres]: {
        type: DataTypes.FLOAT
      },
      [Cols.totalValue]: {
        type: DataTypes.FLOAT
      }
    },
    {
      tableName: 'j10'
    }
  )
}

export default J10
