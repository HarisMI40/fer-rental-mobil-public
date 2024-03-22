import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name : "auth_public",
    initialState : {
        email : "",
        role : "",
        access_token : ""
    },
    reducers : {
        setDataAuth : (state, action) => {
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.access_token = action.payload.access_token;
        },

        removeDataAuth : (state) => {
            state.email = "";
            state.role = "";
            state.access_token = "";
        }
    }
})

export const {setDataAuth, removeDataAuth} = auth.actions;
export default auth.reducer;