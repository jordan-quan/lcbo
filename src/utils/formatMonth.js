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
  month = monthDictionary.indexOf(month.substring(0, 3))

  return new Date(year, month, 1)
}
