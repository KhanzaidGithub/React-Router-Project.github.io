import React from 'react'
import './input.css'
// for displaying Todos We use useselector
import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from '../React-Redux/Todo';
// dispatch is for anykind of action updating deleting 


const ShowTodos = () => {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch();
    console.log(todos.id);

    return (
        <div className='ShowTodo'>
            {/* <h2>Todos</h2> */}
            {todos.map((todo) => (
                <li key={todo.id}>
                    {console.log(todo.id)}
                    {console.log(todo.id)}
                    {console.log(todo.id)}
                    {todo.text}
                    <button onClick={() => dispatch(removetodo(todo.id))}>Delete</button>
                </li>
            ))}
        </div>
    )
}

export default ShowTodos

