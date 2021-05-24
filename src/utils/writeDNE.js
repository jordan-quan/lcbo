import { formatMonth } from './formatMonth'

export const writeDNE = async ({ model, months, data }) => {
  await Promise.all(months.map((month) => model.destroy({ where: { month: formatMonth(month) } })))
  return await model.bulkCreate(data)
}
