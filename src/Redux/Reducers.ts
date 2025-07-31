import { createSlice } from '@reduxjs/toolkit'

import { CounterState } from '@/types/interface'

const initialState: CounterState = {
    info: {
        ProfileTabOpen: false
    }
}

export const Reducers = createSlice({
    name: 'Data',
    initialState,
    reducers: {
        setOpenProfile: (state) => {
            state.info.ProfileTabOpen = true;
        },
        setClosePorfile: (state) => {
            state.info.ProfileTabOpen = false;
        }

    },
})


export const { setOpenProfile, setClosePorfile } = Reducers.actions

export const counterReducer = Reducers.reducer;