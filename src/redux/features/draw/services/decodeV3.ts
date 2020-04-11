import Draw from '../models/Draw'

export function encode(draw: Draw) {
  const jsonString = JSON.stringify(draw)
  const inBase64 = Buffer.from(jsonString).toString('base64')
  return inBase64
}

export default function decode(slug: string): Draw {
  const jsonString = Buffer.from(slug, 'base64').toString()
  const draw = JSON.parse(jsonString)
  return draw
}
