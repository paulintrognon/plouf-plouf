import Values from './Values'

export default interface Draw {
  values: Values
  drawnValues: Values
  drawnIndex: number | null
}
