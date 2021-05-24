const MissingReports = (sequelize, DataTypes) => {
  return sequelize.define(
    'MissingReports',
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
      }
    },
    {
      tableName: 'missing_reports'
    }
  )
}

export default MissingReports
