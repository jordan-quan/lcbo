import Cols from '../constants/columns/ContainerDepositsColumns'

const ContainerDeposits = (sequelize, DataTypes) => {
  return sequelize.define(
    'ContainerDeposits',
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
      [Cols.depositCategory]: {
        type: DataTypes.STRING
      },
      [Cols.totalContainers]: {
        type: DataTypes.INTEGER
      },
      [Cols.depositValue]: {
        type: DataTypes.FLOAT
      }
    },
    {
      tableName: 'container_deposits'
    }
  )
}

export default ContainerDeposits
