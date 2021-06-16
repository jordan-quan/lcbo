import Cols from '../constants/columns/VQAColumns'
import * as DataTypes from '../constants/dataTypes'

export const VQA = {
  tableName: 'vqa',
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
    [Cols.vqaNumber]: {
      type: DataTypes.INTEGER
    },
    [Cols.productCategory]: {
      type: DataTypes.STRING
    },
    [Cols.licenseeType]: {
      type: DataTypes.STRING
    },
    [Cols.bottleSize]: {
      type: DataTypes.FLOAT
    },
    [Cols.bottlesSold]: {
      type: DataTypes.INTEGER
    },
    [Cols.basicPricePerUnit]: {
      type: DataTypes.FLOAT
    },
    [Cols.litresSold]: {
      type: DataTypes.FLOAT
    },
    [Cols.supplierQuote]: {
      type: DataTypes.FLOAT
    },
    [Cols.costPerUnit]: {
      type: DataTypes.FLOAT
    },
    [Cols.costOfGoodsSold]: {
      type: DataTypes.FLOAT
    },
    [Cols.basicSales]: {
      type: DataTypes.FLOAT
    },
    [Cols.discount]: {
      type: DataTypes.FLOAT
    },
    [Cols.licenseeMarkup]: {
      type: DataTypes.FLOAT
    },
    [Cols.netSales]: {
      type: DataTypes.FLOAT
    },
    [Cols.hstSales]: {
      type: DataTypes.FLOAT
    },
    [Cols.hstCogs]: {
      type: DataTypes.FLOAT
    },
    [Cols.refundableContainerDeposit]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalCollected]: {
      type: DataTypes.FLOAT
    },
    [Cols.bottleLevy]: {
      type: DataTypes.FLOAT
    },
    [Cols.environmentalFee]: {
      type: DataTypes.FLOAT
    },
    [Cols.adminFee]: {
      type: DataTypes.FLOAT
    },
    [Cols.totalRemittance]: {
      type: DataTypes.FLOAT
    }
  }
}
