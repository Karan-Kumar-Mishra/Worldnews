import { configureStore } from '@reduxjs/toolkit'
import { Reducers } from './Reducers'

export const store = configureStore({
    reducer: {
        Data:Reducers.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch