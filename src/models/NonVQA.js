import Cols from '../constants/columns/NonVQAColumns'

const NonVQA = (sequelize, DataTypes) => {
  return sequelize.define(
    'NonVQA',
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

      [Cols.productName]: {
        type: DataTypes.STRING
      },
      [Cols.productNumber]: {
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
      [Cols.unitsSold]: {
        type: DataTypes.INTEGER
      },
      [Cols.bottlesPerUnit]: {
        type: DataTypes.FLOAT
      },
      [Cols.basicPricePerUnit]: {
        type: DataTypes.FLOAT
      },
      [Cols.bottlesSold]: {
        type: DataTypes.INTEGER
      },
      [Cols.litresSold]: {
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
      [Cols.unassigned]: {
        type: DataTypes.FLOAT
      },
      [Cols.tiedHouseDiscount]: {
        type: DataTypes.FLOAT
      },
      [Cols.totalRemittance]: {
        type: DataTypes.FLOAT
      }
    },
    {
      tableName: 'non_vqa'
    }
  )
}

export default NonVQA
