import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { slugToDraw } from './helpers'
import { importValuesFromString } from './helpers/importValuesFromString'
import Draw from './types/Draw.type'

export type DrawState = {
  draw: Draw
  hasError: boolean
}
const initialState: DrawState = {
  draw: {
    values: [],
    drawnIndex: null,
  },
  hasError: false,
}

export const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    addValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        draw: {
          ...state.draw,
          // If we have more than 30 values, we add the new value at the beginning
          // so that we can visualize it being added to the list
          values:
            state.draw.values.length < 30
              ? [...state.draw.values, action.payload]
              : [action.payload, ...state.draw.values],
        },
      }
    },

    removeValue: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        draw: {
          ...state.draw,
          values: state.draw.values.filter((v, i) => i !== action.payload),
        },
      }
    },

    setDraw: (_, action: PayloadAction<Draw>) => {
      return {
        draw: action.payload,
        hasError: false,
      }
    },

    importValues: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        draw: {
          ...state.draw,
          values: importValuesFromString(action.payload),
        },
      }
    },

    loadFromSlug: (state, action: PayloadAction<string>) => {
      try {
        return {
          ...state,
          hasError: false,
          draw: slugToDraw(action.payload),
        }
      } catch (err) {
        return {
          ...state,
          hasError: true,
        }
      }
    },

    reset: () => ({ ...initialState }),
  },
})
