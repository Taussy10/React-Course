// Writing slice is naming convention for RTK

// CreateSlice: for creating slice
// What is slice: reducer is store and slice(small part) where google authentication code is written. Like pizza(reducers) and slice(any functionalities)  
// nanoid: for uniques id
import { createSlice, nanoid } from "@reduxjs/toolkit";

// 1. Make intialState
const initialState ={
  todos: [ 
    {
    id:1,
    text:"Write Todos"
    
  }]
}



// 2. Make slice
/* in that slice: 1.Name, 2. intialState 
3.reducers:Takes Properties and Functions(Refrence of functions so that we can call in other file by exproting we don't call here)  

*/
export const todoSlice = createSlice({
  name:'Todo-List',
  initialState,
  // reducer for writing functionalites
  reducers: {
    /* In functions we get 2 things.
    1.state: for intialstate
    2.action: tell what to do 
    Payload is just an object that actions info about the action by action.payload = we are accesing value of payload by . notations
    */
    addTodo: (state,action) => {
      // State = empty cause we haven't written here 
      /*We created addTodo functionality like id, (text: that has to written) values then we push in main todo 
      */
      const todo =  {
        id:nanoid(),
        // action that has to perfrom wrting text and payload carries data 
        text:action.payload
      }
      // we put todo in main todos
     state.todos.push(todo)
     },

removeTodo: (state, action) => {
  state.todos = state.todos.filter((todo) =>
  // action.payload: The data or info associated with that action we put in payload property later(know about objects)
  todo.id !== action.payload 
  ) 
},

   updateTodo: (state, action) => {
      const { id, newText } = action.payload;

      // Find the todo with the specified ID
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      // If the todo is found, update its text property(check initalState)
      if (todoToUpdate) {
        todoToUpdate.text = newText;
      }
    },
  }})

  // we export functiality that will be used in comps
  export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

  // We exported all reducer
  export default todoSlice.reducer;