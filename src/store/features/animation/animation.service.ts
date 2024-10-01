import { animationSlice } from './animation.slice'
import { store } from '../../store'
import Draw from '../draw/types/Draw.type'

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))
const DELAY_MS = 300
const MAX_VALUES_TO_ANIMATE = 6

export async function startDrawAnimation(draw: Draw) {
  store.dispatch(animationSlice.actions.start())

  const nbValues = draw.values.length

  // If there is no draw, we stop here
  if (draw.drawnIndex === null) {
    return
  }

  // Before starting the animation, we go back to the top of the page
  window.scrollTo(0, 0)

  // Animate title
  await delay(DELAY_MS)
  store.dispatch(animationSlice.actions.animatePlouf1())
  await delay(DELAY_MS)
  store.dispatch(animationSlice.actions.animatePlouf2())
  await delay(100)

  // If there is less than MAX_VALUES_TO_ANIMATE values, we animate them all in turn
  if (nbValues < MAX_VALUES_TO_ANIMATE) {
    const nbIterations = nbValues < 3 ? 2 : 1

    for (let iteration = 0; iteration < nbIterations; iteration++) {
      for (let index = 0; index < nbValues; index++) {
        await delay(DELAY_MS)
        store.dispatch(animationSlice.actions.animateValue(index))
      }
    }

    for (let index = 0; index < draw.drawnIndex; index++) {
      await delay(DELAY_MS)
      store.dispatch(animationSlice.actions.animateValue(index))
    }
  }
  // If there is more than MAX_VALUES_TO_ANIMATE values, we animate MAX_VALUES_TO_ANIMATE randomly picked values
  else {
    // We create a list of indices of candidates values to be animated
    const indices = Object.keys(draw.values)
    indices.splice(draw.drawnIndex, 1) // We exclude the result from the candidates

    for (let i = 0; i < MAX_VALUES_TO_ANIMATE - 1; i++) {
      const index = Math.floor(Math.random() * indices.length) // We pick a value from the (remaining) candidates
      await delay(DELAY_MS)
      store.dispatch(animationSlice.actions.animateValue(Number(indices[index])))
      indices.splice(index, 1) // If a value has been chosen to be animated, we remove it from the candidates
    }
  }

  await delay(DELAY_MS)
  store.dispatch(animationSlice.actions.animateDrawnValue(draw.drawnIndex))

  await delay(500)
  store.dispatch(animationSlice.actions.end())
}
