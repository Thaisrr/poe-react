import {configureStore} from "@reduxjs/toolkit";
import basketReducer from "./basket.js"
const store = configureStore({
    reducer: {
        basket : basketReducer
    }
})

export default store;
