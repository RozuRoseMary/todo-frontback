import { createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    title: "",
    // completed: false,
    // dueDate: "",
  },
  reducers: {
    getAllTodo: (state, action) => {
      state.todos = action.payload?.todos;
    },
    // createTodo: (state, action) => {
    //   // [...todos, todos]
    //   // state.todo =
    // },
    updateTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export default todoSlice.reducer;
export const { getAllTodo, createTodo } = todoSlice.actions;

export const getAllTodoAsync = () => async (dispatch) => {
  try {
    const res = await axios.get("/todos");
    dispatch(getAllTodo({ todos: res.data.todo }));
  } catch (err) {}
};

export const createTodoAsync = (todo) => async (dispatch) => {
  try {
    await axios.post("/todos/createTodo", {
      title: todo,
    });
    dispatch(getAllTodoAsync());
  } catch (err) {}
};

export const deleteTodoAsync = () => async (dispatch) => {};
