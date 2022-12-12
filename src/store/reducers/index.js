import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './authReducer'
import geyserHybridReducer from "./geyserHybridReducer";
const rootReducer = combineReducers({
    auth : authReducer,
    geyserHybrid: geyserHybridReducer



})

export default rootReducer

