import { AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { useState } from 'react';

function Todos() {
  // we get the todos from intialState useSelector is use to list all state we want to show all todos
  // In useSelector we get acess of state
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Define a state to store the edited text and the id of the todo being edited
  const [editedText, setEditedText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  // Define a function to handle saving edited text
  const handleSaveClick = (todoId) => {
    // Dispatch an action to update the todo text
    dispatch(updateTodo({ id: todoId, newText: editedText }));
    // Clear the edited text and reset the editingTodoId
    setEditedText('');
    setEditingTodoId(null);
  };
  return (
    <>
      {/* We list here all todos by map method  and style them  */}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              // Render a text area for editing when editingTodoId matches the current todo id
              <textarea
                rows="1"
                cols="10"
                className="text-black"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            ) : (
              // Render the todo text when not in edit mode
              <div className="text-white">
                {todo.text}</div>
            )}

            <div>
              {editingTodoId === todo.id ? (
                // Render a "Save" button when editingTodoId matches the current todo id
                <button
                  className="text-white font-bold text-xl"
                  onClick={() => handleSaveClick(todo.id)}
                >
                  Save
                </button>
              ) : (
                // Render an "Edit" button when not in edit mode
                <button
                  className="text-white font-bold text-xl"
                  onClick={() => {
                    setEditedText(todo.text); // Populate the edited text with the current todo text
                    setEditingTodoId(todo.id); // Set the editingTodoId to the current todo id
                  }}
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <AiFillDelete />
                {/* Your delete button */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
