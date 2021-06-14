import Cols from '../constants/columns/DutyFreeColumns'
import * as DataTypes from '../constants/dataTypes'

export const DutyFree = {
  tableName: 'duty_free',
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
    [Cols.productName]: {
      type: DataTypes.STRING
    },
    [Cols.productNumber]: {
      type: DataTypes.INTEGER
    },
    [Cols.productCategory]: {
      type: DataTypes.STRING
    },
    [Cols.operatorNumber]: {
      type: DataTypes.STRING
    },
    [Cols.bottleSize]: {
      type: DataTypes.FLOAT
    },
    [Cols.bottlesPerUnit]: {
      type: DataTypes.INTEGER
    },
    [Cols.unitsPerCase]: {
      type: DataTypes.INTEGER
    },
    [Cols.casesSold]: {
      type: DataTypes.INTEGER
    },
    [Cols.costPerUnit]: {
      type: DataTypes.FLOAT
    },
    [Cols.litresSold]: {
      type: DataTypes.FLOAT
    },
    [Cols.costOfGoodsSold]: {
      type: DataTypes.FLOAT
    },
    [Cols.netSales]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalCollected]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalRemittance]: {
      type: DataTypes.FLOAT
    }
  }
}
