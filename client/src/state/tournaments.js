import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const getTournaments = createAsyncThunk("TOURNAMENTS", async (setTournaments) => {
    try {
        const res = await axios.get("/api/tournament/all")
        setTournaments(res.data)
        return res.data
    } catch (err) {
        return err.message
    }
})

export const deleteTournament = createAsyncThunk("DELETE_TOURNAMENT", async (tournament) => {
    try {
      const res = await axios.delete(`/api/tournament/${tournament.id}`);
      return res.data
    } catch (err) {
      return err.message;
    }
  }
  );



const tournamentsReducer = createReducer(
    {},
    {
        [getTournaments.fulfilled]: (state,action) => action.payload,
        [deleteTournament.fulfilled]: (state,action) => action.payload,
    }
)

export default tournamentsReducer;