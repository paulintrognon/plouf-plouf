import Draw from '../models/Draw'

export function encode(draw: Draw): string {
  const encodedValues = draw.values.map(value => encodeURIComponent(value)).join(',')
  const finalValue = `${encodedValues}=>${draw.drawnIndex}`
  const inBase64 = Buffer.from(finalValue).toString('base64')
  return encodeURIComponent(inBase64)
}

export default function decode(slug: string): Draw {
  const str = Buffer.from(decodeURIComponent(slug), 'base64').toString()
  const split = str.split('=>')
  const values = split[0].split(',').map(value => decodeURIComponent(value))
  const drawnIndex = parseInt(split[1], 10)
  return {
    values,
    drawnIndex,
  }
}
