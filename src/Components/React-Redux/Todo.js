import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Hello world' }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // name is important then main thing comes in reducers where we can make multiple function and then we can export all of them can use them anywhere in the app 

    reducers: {
        // Two paramters are compulsory in function state,action
        //State tells you the current value of the functin
        // Here is to create todo function
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),  // id:Date.now() this is one also generate  unique id 

                text: action.payload // payload is Self object  we can access values by adding .dot
            }
            state.todos.push(todo)
        },
        //Current State action data is passing through
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload
            })
        },
    }
})

// NOw we have to export each functionality 

export const { addtodo, removetodo } = todoSlice.actions

// and also aware configurestore about all the reducer

export default todoSlice.reducer