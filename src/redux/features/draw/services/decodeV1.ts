import Draw from '../models/Draw'

export default function decode(b64: string): Draw {
  const str = atob(b64)
  const split = str.split('=>')
  const values = split[0].split(',')
  return {
    values,
    drawnIndex: parseInt(split[1], 10),
  }
}
