import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const deleteTablePoints = createAsyncThunk("DELETE_POINTS", (userId) => {
    return axios.delete(`/api/point/${userId}`)
     
 })
 
const pointsReducer = createReducer(
    {},
    {
        [deleteTablePoints.fulfilled]: (state,action) => action.payload,
        
    }
)

export default pointsReducer;