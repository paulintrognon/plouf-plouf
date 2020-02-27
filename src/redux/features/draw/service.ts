import Draw from './models/draw'

export function slugToDraw(slug: string): Draw {
  const str = Buffer.from(slug, 'base64').toString()
  const split = str.split('=>')
  const values = split[0].split(',')
  const drawnIndex = parseInt(split[1], 10)
  return {
    values,
    drawnIndex,
  }
}

export function drawIndex(values: Array<string>): number {
  return Math.floor(Math.random() * values.length)
}

export function drawToSlug(draw: Draw): string {
  const str = draw.values.join(',') + '=>' + draw.drawnIndex
  return Buffer.from(str).toString('base64')
}
