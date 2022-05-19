import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { getAllTodoAsync } from "../../stores/todo";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodoAsync());
  }, []);

  return (
    <ul className="list-group shadow mt-4">
      {todos.map((el) => (
        <Todo
          key={el.id}
          id={el.id}
          title={el.title}
          completed={el.completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;
