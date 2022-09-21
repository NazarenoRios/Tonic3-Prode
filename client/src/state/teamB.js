import { createReducer, createAction } from "@reduxjs/toolkit";

export const setTeamB = createAction("SET_ACTUAL_PHASE")

const teamBReducer = createReducer(
    {},
    {
        [setTeamB]: (state,action) => action.payload,
    }
)

export default teamBReducer;