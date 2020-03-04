import Draw from './models/Draw'

export function slugToDraw(slug: string): Draw {
  if (slug.slice(-3) === '-v2') {
    return decode(slug.slice(0, -3))
  }
  return oldDecode(slug)
}

export function drawIndex(values: Array<string>): number {
  return Math.floor(Math.random() * values.length)
}

export function drawToSlug(draw: Draw): string {
  return encode(draw)
}

function encode(draw: Draw): string {
  const encodedValues = draw.values.map(value => encodeURIComponent(value)).join(',')
  const finalValue = `${encodedValues}=>${draw.drawnIndex}`
  const inBase64 = Buffer.from(finalValue).toString('base64')
  return `${encodeURIComponent(inBase64)}-v2`
}

function decode(slug: string): Draw {
  const str = Buffer.from(decodeURIComponent(slug), 'base64').toString()
  const split = str.split('=>')
  console.log(split)
  const values = split[0].split(',').map(value => decodeURIComponent(value))
  const drawnIndex = parseInt(split[1], 10)
  console.log({
    values,
    drawnIndex,
  })
  return {
    values,
    drawnIndex,
  }
}

function oldDecode(b64: string): Draw {
  const str = atob(b64)
  const split = str.split('=>')
  const values = split[0].split(',')
  return {
    values,
    drawnIndex: parseInt(split[1], 10),
  }
}
