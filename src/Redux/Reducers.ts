import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounterState,usertype } from '@/types/interface'

const initialState: CounterState = {
    info: {
        ProfileTabOpen: false,
        user: {
            token: "",
            email: "",
            family_name: "User",
            given_name: "user",
            id: "",
            name: "",
            picture: "https://static.thenounproject.com/png/5100711-200.png",
            verified_email: true
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
        }
    },
})


export const { setOpenProfile, setClosePorfile, setToken, setProfile } = Reducers.actions

export const counterReducer = Reducers.reducer;