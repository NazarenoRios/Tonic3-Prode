import { createReducer, createAction } from "@reduxjs/toolkit";

export const setActualPhase = createAction("SET_ACTUAL_PHASE")

const phaseReducer = createReducer(
    "",
    {
        [setActualPhase]: (state,action) => action.payload,
    }
)

export default phaseReducer;