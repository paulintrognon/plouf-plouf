import Draw from '../models/Draw'
import Values from '../models/Values'

export function serialize(values: Values, drawnIndex: number): string {
  const str = values.join(',') + '=>' + drawnIndex
  return Buffer.from(str).toString('base64')
}

export function slugToDraw(slug: string): Draw {
  const str = Buffer.from(slug, 'base64').toString()
  const split = str.split('=>')
  const values = split[0].split(',')
  const drawnIndex = parseInt(split[1], 10)
  return {
    values,
    drawnIndex,
    slug,
  }
}

export function draw(values: Values): Draw {
  const drawnIndex: number = Math.floor(Math.random() * values.length)
  return {
    values: values,
    drawnIndex,
    slug: serialize(values, drawnIndex),
  }
}
