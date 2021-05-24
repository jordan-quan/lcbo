import Cols from '../constants/columns/FarmersColumns'

const Farmers = (sequelize, DataTypes) => {
  return sequelize.define(
    'VQA',
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
      tableName: 'farmers'
    }
  )
}

export default Farmers
