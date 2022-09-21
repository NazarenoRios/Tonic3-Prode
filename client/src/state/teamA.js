import { createReducer, createAction } from "@reduxjs/toolkit";

export const setTeamA = createAction("SET_ACTUAL_PHASE")

const teamAReducer = createReducer(
    {},
    {
        [setTeamA]: (state,action) => action.payload,
    }
)

export default teamAReducer;