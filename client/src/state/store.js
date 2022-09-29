import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from "./matches";
import phaseReducer from "./phase";
import pointsReducer from "./points";
import profileReducer from "./profile";
import tournamentsReducer from "./tournaments";
// import logger from "redux-logger"
import userReducer from "./user";

const store = configureStore({
    //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        tournament: tournamentsReducer,
        phase: phaseReducer,
        matches: matchesReducer,
        points: pointsReducer,
        profile: profileReducer
    }
})

export default store