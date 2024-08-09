import Draw from '../models/Draw'

export default function decode(b64: string): Draw {
  const str = atob(b64)
  const split = str.split('=>')
  const values = split[0].split(',')
  const drawnValues = split[1].split(',')
  return {
    values,
    drawnValues,
    drawnIndex: parseInt(split[2], 10),
  }
}
