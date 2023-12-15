// Redux map
// 1.Store.js  
// 2.TodoSlce.js{Made function that do some tasks }  
// 3.The function you made in TodoSlice.js will use in AddTodo.js

import TodoSlice from "../Features/Todo/TodoSlice";
// 1. Configure the store 
import { configureStore } from "@reduxjs/toolkit";


// 2. put TodoSlice in reducer{object} from TodoSlice.js

export const store = configureStore({
  reducer: TodoSlice
})
