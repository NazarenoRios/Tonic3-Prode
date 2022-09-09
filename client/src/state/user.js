import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const googleLogin = createAsyncThunk("GOOGLE_LOGIN", async (tokenResponse) => {
    try {
        const res = await axios.put("/api/user/googlelogin", { credential: tokenResponse.credential })
        return res.data
    } catch (err) {
        return err.message
    }
})

export const getUser = createAsyncThunk("GET_USER", async () => {
    try {
        const res = await axios.get("/api/user/me")
        console.log(res)
        return res.data
    } catch (err) {
        return err.message
    }
})

const userReducer = createReducer(
    {},
    {
        [googleLogin.fulfilled]: (state,action) => action.payload,
        [getUser.fulfilled]: (state,action) => action.payload,
    }
)

export default userReducer;