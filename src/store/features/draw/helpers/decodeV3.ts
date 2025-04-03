import Draw from '../types/Draw.type'

export function encode(draw: Draw): string {
  const jsonString = JSON.stringify({
    v: draw.values,
    d: draw.previousValues,
    i: draw.drawnIndex,
  })
  const inBase64 = Buffer.from(jsonString).toString('base64')
  return inBase64
}

export default function decode(slug: string): Draw {
  const jsonString = Buffer.from(slug, 'base64').toString()
  const draw = JSON.parse(jsonString)
  return {
    values: draw.v,
    // Handle case where slug does not contains drawn values
    previousValues: draw.d !== undefined ? draw.d : [],
    drawnIndex: draw.i,
  }
}
