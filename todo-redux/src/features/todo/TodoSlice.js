import {createSlice, nanoid} from '@reduxjs/toolkit'; 

export const initialState = {
    todos: [ { id: 1, text: 'Learn Redux Toolkit' } ],
}

export const todoSlice = createSlice({
    name: 'todo',
     initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id : nanoid(), 
                text: action.payload 
            };
            state.todos.push(newTodo);
        } ,
        toggleTodo: (state, action) => {
            const todoId = action.payload;
            const todo = state.todos.find(todo => todo.id === todoId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            const todoId = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        }
    }

})