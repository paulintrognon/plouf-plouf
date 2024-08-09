import Draw from '../types/Draw.type'

export function encode(draw: Draw): string {
  const encodedValues = draw.values.map(value => encodeURIComponent(value)).join(',')
  const encodedDrawnValues = draw.previousValues.map(value => encodeURIComponent(value)).join(',')
  const finalValue = `${encodedValues}=>${encodedDrawnValues}=>${draw.drawnIndex}`
  const inBase64 = Buffer.from(finalValue).toString('base64')
  return encodeURIComponent(inBase64)
}

export default function decode(slug: string): Draw {
  const str = Buffer.from(decodeURIComponent(slug), 'base64').toString()
  const split = str.split('=>')
  const values = split[0].split(',').map(value => decodeURIComponent(value))  
  // Handle case where slug does not contains drawn values
  let previousValues: Array<string>, drawnIndex
  if (split.length > 2) {
    previousValues = split[1].split(',').map(value => decodeURIComponent(value))
    drawnIndex = parseInt(split[2], 10)
  } else {
    previousValues = []
    drawnIndex = parseInt(split[1], 10)
  }
  return {
    values,
    previousValues,
    drawnIndex,
  }
}
