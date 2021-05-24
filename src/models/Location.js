import Cols from '../constants/columns/LocationColumns'

const Location = (sequelize, DataTypes) => {
  return sequelize.define(
    'Location',
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
      [Cols.locationType]: {
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
      tableName: 'location'
    }
  )
}

export default Location
