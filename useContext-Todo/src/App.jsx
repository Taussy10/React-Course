import { useState, useEffect } from 'react'
// We imported whole foler
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // intial todos(from TodoProvider we get todos) : null array
  const [todos, setTodos] = useState([])

  // Parameter as todo = new item that you want to add in list
  // Here we construct newTodo: first bring prev data then gave id then use variable todo for new item that i want to update You can check in react devloper tools 
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Math.random(), ...todo}, ...prev] )
  }

  // It has two arguments id , todo 
  /*1.We bring prev data 
  2.used map for looping all todos and check each todos id and other data  so we  put in box called prevTodo(siginifies each todo)
  3.use if statement that if previous.id == id then write todo(I am gonnaa write) else write previous Todo
  */
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }
//  We get argument ss id 
/* 1:We bring prev data 
2. we use filter method for filtering the prvious data of todo
3.if todo.id not equal to id then(actual id) then we filter(delete) it 
*/
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  /* We get value(toggleComplete from TodoProvider)
  1.we want to do something with id so we put argument  as id
  2. setTodos is used to update the state of the todos and parameter for getting previous value
  3.prev.map for check all previous todos and prevTodo resemble each todo
  4.if prevTodo.id === id(actual id) else put prev
  In setTodos use prev.map and put each todo in box called prevTodo and check it's id(if it's equal then spread previous todo else say not oequal to previous todo)
  */

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  /* For storing data locally */
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"))

  //   if (todos && todos.length > 0) {
  //     setTodos(todos)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }, [todos]) 
  



  return (
    // values that we want from todoProvdider
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Chuha Notes</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App