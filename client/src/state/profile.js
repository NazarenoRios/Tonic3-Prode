import { createReducer, createAction } from "@reduxjs/toolkit";

export const setActualProfile = createAction("SET_ACTUAL_PROFILE")

const profileReducer = createReducer(
    {},
    {
        [setActualProfile]: (state,action) => action.payload,
    }
)

export default profileReducer;