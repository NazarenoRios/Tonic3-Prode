import { configureStore } from "@reduxjs/toolkit";
import phaseReducer from "./phase";
import teamAReducer from "./teamA";
import teamBReducer from "./teamB";
import tournamentsReducer from "./tournaments";
// import logger from "redux-logger"
import userReducer from "./user";

const store = configureStore({
    //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        tournament: tournamentsReducer,
        phase: phaseReducer,
        teamA: teamAReducer,
        teamB: teamBReducer
    }
})

export default store