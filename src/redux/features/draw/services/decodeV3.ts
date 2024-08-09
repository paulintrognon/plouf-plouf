import Draw from '../models/Draw'

export function encode(draw: Draw): string {
  const jsonString = JSON.stringify({
    v: draw.values,
    d: draw.drawnValues,
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
    drawnValues: draw.d,
    drawnIndex: draw.i,
  }
}
