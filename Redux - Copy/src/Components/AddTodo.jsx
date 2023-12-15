import {useState} from 'react'
import {useDispatch} from 'react-redux'
//Getting addTodo functionality 
import { addTodo } from '../features/todo/todoSlice'

 

function AddTodo() {
  // want to change the of input 
    const [input, setInput] = useState('')
    // brirng dispatch method and store in dispatch
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        /* We pass addTodo(from todoSlice.js) functionality in input tag then we use 
        e.target.value to get data from input tag 
        When a input tag clicked a functioanliy will dispatch called addTodo basically dispatch funciton use to bring both funcioality and where to use functialiy data then both work together.
        */
        dispatch(addTodo(input))
        setInput('Remove It')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  placeholder-white placeholder:font-bold placeholder:text-xl"
        placeholder="Enter a Todo..."
        // value={input}
        // when we write anything in input tag we get value of it  
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo