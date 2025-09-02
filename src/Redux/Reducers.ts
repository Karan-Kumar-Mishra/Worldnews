import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounterState, usertype } from '@/types/interface'

const initialState: CounterState = {
    info: {
        ProfileTabOpen: false,
        user: {
            token: null,
            email: null,
            family_name: null,
            given_name: null,
            id: null,
            name: null,
            picture: "https://static.thenounproject.com/png/5100711-200.png",
            verified_email: null
        }
    },

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
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.info.user.token = action.payload;
        },
        setProfile: (state, action: PayloadAction<usertype>) => {
            state.info.user.email = action.payload.email;
            state.info.user.family_name = action.payload.family_name;
            state.info.user.given_name = action.payload.given_name;
            state.info.user.id = action.payload.id;
            state.info.user.name = action.payload.name;
            state.info.user.picture = action.payload.picture;
        },
        clearProfile: (state) => {
            state.info.user.email = null;
            state.info.user.family_name = null;
            state.info.user.given_name = null;
            state.info.user.id = null;
            state.info.user.name = null;
            state.info.user.picture = null;
        }
    },
})


export const { setOpenProfile, setClosePorfile, setToken, setProfile } = Reducers.actions

export const counterReducer = Reducers.reducer;