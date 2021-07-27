import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import application from './application/reducer'
import user from './user/reducer'

const PERSISTED_KEYS: string[] = ['user', 'lists']

const store = configureStore({
  reducer: {
    application,
    user
  },
  middleware: [...getDefaultMiddleware({ thunk: false, immutableCheck: false, serializableCheck: false }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS })
})


export default store
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
