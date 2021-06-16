import Cols from '../constants/columns/VQAOColumns'
import * as DataTypes from '../constants/dataTypes'

export const VQAO = {
  tableName: 'vqao',
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

    [Cols.vqaNumber]: {
      type: DataTypes.STRING
    },
    [Cols.productName]: {
      type: DataTypes.STRING
    },
    [Cols.productCategory]: {
      type: DataTypes.STRING
    },
    [Cols.bottleSize]: {
      type: DataTypes.FLOAT
    },
    [Cols.retailPricePerUnit]: {
      type: DataTypes.FLOAT
    },
    [Cols.wrsLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.wrsValue]: {
      type: DataTypes.FLOAT
    },
    [Cols.directDeliveryLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.directDeliveryValue]: {
      type: DataTypes.FLOAT
    },
    [Cols.lcboLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.lcboValue]: {
      type: DataTypes.FLOAT
    },
    [Cols.otherProvincesLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.otherProvincesValue]: {
      type: DataTypes.FLOAT
    },
    [Cols.exportLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.exportValue]: {
      type: DataTypes.FLOAT
    },
    [Cols.farmersMarketLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.farmersMarketValue]: {
      type: DataTypes.FLOAT
    },
    [Cols.miscLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.miscValue]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalContainers]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalLitres]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalValue]: {
      type: DataTypes.FLOAT
    }
  }
}
