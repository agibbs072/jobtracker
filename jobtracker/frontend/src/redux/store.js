import { configureStore } from '@reduxjs/toolkit';
import jobReducer from "./jobSlice.js";
import optionsReducer from "./optionsSlice.js";


export default configureStore({
    reducer: {
        job: jobReducer,
        options: optionsReducer,
    }
})