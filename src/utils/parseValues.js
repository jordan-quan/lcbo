import { STRING, FLOAT, INTEGER, DATE } from '../constants/dataTypes'

export const parseValues = (object, shape) => {
  const keys = Object.keys(object)
  return keys.reduce((acc, key, index) => {
    const value = object[key]
    const { type } = shape[key]
    const end = index === keys.length - 1 ? '' : ','
    const nullString = `${acc}null${end}`

    if (value === undefined || value === null) return nullString

    if (type === DATE) return `${acc}'${value}'${end}`

    if (type === STRING) {
      if (value.indexOf("'") !== -1) return `${acc}'${value.replace("'", '')}'${end}`
      if (value.indexOf('`') !== -1) return `${acc}'${value.replace('`', '')}'${end}`
      return `${acc}'${value}'${end}`
    }

    if (type === INTEGER) {
      const int = parseInt(value)
      if (!isNaN(int)) return `${acc}${int}${end}`
      return nullString
    }

    if (type === FLOAT) {
      const float = parseFloat(value)
      if (!isNaN(float)) return `${acc}${float}${end}`
      return nullString
    }
  }, '')
}
