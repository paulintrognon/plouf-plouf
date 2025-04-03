import Values from './Values.type'

export default interface Draw {
  values: Values
  previousValues: Values
  drawnIndex: number | null
}
