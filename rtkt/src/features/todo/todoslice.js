//creating slice
import { createSlice } from "@reduxjs/toolkit";

//creating slice
const initialState = {
  todos: [
    {
      id: 1,
      text: "Learn React",
    },
  ],
};

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      todo.text = text;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoslice.actions;
export default todoslice.reducer;

