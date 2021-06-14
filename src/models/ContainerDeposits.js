import Cols from '../constants/columns/ContainerDepositsColumns'
import * as DataTypes from '../constants/dataTypes'

export const ContainerDeposits = {
  tableName: 'container_deposits',
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
    [Cols.depositCategory]: {
      type: DataTypes.STRING
    },
    [Cols.totalContainers]: {
      type: DataTypes.INTEGER
    },
    [Cols.depositValue]: {
      type: DataTypes.FLOAT
    }
  }
}
