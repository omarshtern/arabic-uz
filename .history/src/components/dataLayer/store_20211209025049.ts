import { configureStore } from "@reduxjs/toolkit";
import reducers from "./slices/rootReducer";


const store = configureStore({
    reducer: reducers,
    applyM
})