import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todo';

export const store = configureStore({
    reducer: {
        todo: todosReducer,
    },
});