import { configureStore } from "@reduxjs/toolkit";
import TodoSlice  from "./Thunk/todoList";
export const store = configureStore({
    reducer: {
        todos:TodoSlice
    }
})