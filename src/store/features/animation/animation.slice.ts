import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Animation from './types/Animation.type'

export type AnimationState = Animation

const initialState: AnimationState = {
  started: false,
  plouf1: false,
  plouf2: false,
  value: null,
  selectWinner: false,
  ended: false,
}

export const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    start: () => {
      return {
        ...initialState,
        started: true,
      }
    },

    animatePlouf1: state => {
      return {
        ...state,
        plouf1: true,
      }
    },

    animatePlouf2: state => {
      return {
        ...state,
        plouf1: false,
        plouf2: true,
      }
    },

    animateValue: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        plouf2: false,
        value: action.payload,
      }
    },

    animateDrawnValue: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        value: action.payload,
        selectWinner: true,
      }
    },

    end: state => {
      return {
        ...state,
        started: false,
        ended: true,
      }
    },

    reset: () => ({ ...initialState }),
  },
})
