import Cols from '../constants/columns/WRSColumns'

const WRS = (sequelize, DataTypes) => {
  return sequelize.define(
    'WRS',
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
      [Cols.productType]: {
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
      tableName: 'wrs'
    }
  )
}

export default WRS
