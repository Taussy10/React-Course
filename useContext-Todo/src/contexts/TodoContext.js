import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
//     // Functailites
//     // Todo for adding todo
    addTodo: (todo) => {},
//     // id for Crud operations also complete which one i have to do
    updateTodo: (id, todo) => {},
//     // todo ka kya krega that's why no todo
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
 })

// //We put data here so that we cam use in useContext
export const useTodo = () => {
    return useContext(TodoContext)
}

// // Provides the data of TodoContext it is usually use for wrapping all comps in App.jsx
 export const TodoProvider = TodoContext.Provider