export const zip = (keys, values) =>
  keys.reduce((acc, key, i) => ({ ...acc, [key]: values[i] }), {})
