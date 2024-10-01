import { Middleware, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { animationSlice } from './features/animation/animation.slice'
import { drawSlice } from './features/draw/draw.slice'

const middlewares: Array<Middleware> = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = configureStore({
  reducer: {
    animation: animationSlice.reducer,
    draw: drawSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
