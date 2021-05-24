export const replaceData = async ({ model, data, winery, month }) => {
  try {
    await model.destroy({
      where: {
        winery,
        month
      }
    })
    return await model.bulkCreate(data)
  } catch (e) {
    console.log(`Error replacing data: ${e}`)
  }
}
