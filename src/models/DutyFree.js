import Cols from '../constants/columns/DutyFreeColumns'

const DutyFree = (sequelize, DataTypes) => {
  return sequelize.define(
    'DutyFree',
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
    },
    {
      tableName: 'duty_free'
    }
  )
}

export default DutyFree
