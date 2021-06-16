import * as DataTypes from '../constants/dataTypes'

export const MissingReports = {
  tableName: 'missing_reports',
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
    }
  }
}
