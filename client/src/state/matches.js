import { createReducer, createAction } from "@reduxjs/toolkit";

export const setMatches = createAction("SET_MATCHES")

const matchesReducer = createReducer(
    [],
    {
        [setMatches]: (state,action) => action.payload,
    }
)

export default matchesReducer;