import { configureStore } from "@reduxjs/toolkit";
import tournamentsReducer from "./tournaments";
// import logger from "redux-logger"
import userReducer from "./user";

const store = configureStore({
    //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        tournaments: tournamentsReducer,
    }
})

export default store