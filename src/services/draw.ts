import Draw from '../models/Draw'
import Values from '../models/Values'

export function serialize(values: Values, drawnIndex: number): string {
  const str = values.join(',') + '=>' + drawnIndex
  return btoa(str)
}

export function unserialize(slug: string): Draw {
  const str = atob(slug)
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
