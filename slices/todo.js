import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        initTodos: (state, action) => {
            state.todos = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [
                action.payload,
                ...state.todos
            ],
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        checkAllDone: (state, action) => {
            state.todos = action.payload,
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload),
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        checkDone: (state, action) => {
            state.todos = action.payload,
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        clearCompleted: (state, action) => {
            state.todos = action.payload,
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    },
});

export const { initTodos, addTodo, checkAllDone, deleteTodo, checkDone, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;