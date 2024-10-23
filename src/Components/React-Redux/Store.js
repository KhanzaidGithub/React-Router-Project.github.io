import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Todo'; // The todo slice

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Using the todoReducer here
    }
});
