/* eslint-disable max-len */
export const capitalizeFirstLetter = (string: string) : string => string.charAt(0).toUpperCase() + string.slice(1)

export const zerosPrefix = (integer: number, quantityOfNumbers: number) : string => String(integer).padStart(quantityOfNumbers, '0')

export default {
  zerosPrefix,
  capitalizeFirstLetter
}
