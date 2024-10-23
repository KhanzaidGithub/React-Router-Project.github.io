import React, { useState } from 'react'
// we need to import individual functions from or slices 
import { addtodo } from '../React-Redux/Todo'
import { useDispatch } from 'react-redux'

const InputTodo = () => {

    // const [input,setInput] = React.useState('')
    const [input, setInput] = useState('')
    let disptach = useDispatch();


    const addTodoHandler =(e)=>{
        e.preventDefault();
        disptach(addtodo(input))  // this is payload dispacth where do you wanna send the input value 
        setInput('')
    }
    

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input type="text" value={input} onChange={(e) => e.target.value} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default InputTodo

// useDispatch use reducer to make changes in the store