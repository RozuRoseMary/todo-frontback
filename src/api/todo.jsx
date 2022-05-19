import axios from "../config/axios";

export const getAllTodo = async () => {
  try {
    const res = await axios.get("/todos/");
    return res.data.todo;
  } catch (err) {}

  // .then((res) => res.data.todo);
  // .catch((err) => err);
};
