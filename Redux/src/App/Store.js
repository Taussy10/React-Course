
import TodoSlice from "../Features/Todo/TodoSlice";
// 1. Configure the store 
import { configureStore } from "@reduxjs/toolkit";


// 2. put TodoSlice in reducer
export const store = configureStore({
  reducer: TodoSlice

})
