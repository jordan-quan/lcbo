const monthDictionary = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const formatMonth = (month) => {
  const year = '20' + month.substring(3, 5)
  month = monthDictionary.indexOf(month.substring(0, 3)) + 1
  return `${year}-${month < 10 ? `0${month}`: month}-01`
}
