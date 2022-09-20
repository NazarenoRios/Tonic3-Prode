import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setTournament = createAction("SET_TOURNAMENT")

export const setTournament2 = createAction("SET_TOURNAMENT")


export const TournamentTeams = createAsyncThunk("SET_TOURNAMENTS", async () => {
    try {
        const res = await axios.get("/api/tournament/all")
        return res.data
    } catch (err) {
        return err.message
    }
})

const tournamentsReducer = createReducer(
    [],
    {
        [setTournament]: (state,action) => action.payload,
        [setTournament2]: (state,action) => action.payload,
    }
)

export default tournamentsReducer;