import Draw from '../types/Draw.type'

export default function decode(b64: string): Draw {
  const str = atob(b64)
  const split = str.split('=>')
  const values = split[0].split(',')  
  // Handle case where slug does not contains drawn values
  let previousValues: Array<string>, drawnIndex
  if (split.length > 2) {
    previousValues = split[1].split(',')
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
