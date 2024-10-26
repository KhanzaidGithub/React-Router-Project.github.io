import React, { useState } from 'react'
// we need to import individual functions from or slices 
import { addtodo } from '../React-Redux/Todo'
import { useDispatch } from 'react-redux'
import './input.css'


const InputTodo = () => {
    // const [input,setInput] = React.useState('')
    const [input, setInput] = useState('')
    let disptach = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please write something');
            return;
        }
        disptach(addtodo(input))  // this is payload dispacth where do you wanna send the input value 
        setInput('')

    }


    return (
        <div>
            <form className='form' onSubmit={addTodoHandler}>
                <input type="text" value={input} placeholder='Enter Todo' onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default InputTodo

// useDispatch use reducer to make changes in the store