import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
// import valueReducer from './createSlice'
// export const store = configureStore({
//     reducer: {
//         name: valueReducer,
//     }
// })
export const store = configureStore({
   reducer : {
       rootReducer
} 
    
})
