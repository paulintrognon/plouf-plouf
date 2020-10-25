import Draw from '../models/Draw'
import decodeV1 from './decodeV1'
import decodeV2 from './decodeV2'
import decodeV3, { encode } from './decodeV3'

export function slugToDraw(slug: string): Draw {
  const draw = decode(slug)
  if (draw.values.length <= 1 || draw.drawnIndex === null || isNaN(draw.drawnIndex)) {
    throw new Error('Could not decode slug')
  }
  return draw
}

function decode(slug: string): Draw {
  if (slug.slice(-3) === '-v3') {
    return decodeV3(slug.slice(0, -3))
  }
  // Legacy decoding
  if (slug.slice(-3) === '-v2') {
    return decodeV2(slug.slice(0, -3))
  }
  return decodeV1(slug)
}

export function drawIndex(values: Array<string>): number {
  return Math.floor(Math.random() * values.length)
}

export function drawToSlug(draw: Draw): string {
  const encodedDraw = encode(draw)
  return `${encodedDraw}-v3`
}
