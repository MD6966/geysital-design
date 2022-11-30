import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import persistStore from "redux-persist/es/persistStore";
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
export const persistor = persistStore(store);
