export const capitalizeFirstLetter = (string: string) : string => string.charAt(0).toUpperCase() + string.slice(1)

export const zerosPrefix = (integer: number, quantityOfNumbers: number) => String(integer).padStart(quantityOfNumbers, '0')
