import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../../contexts/TodoContext";

function TodoList() {
  const { todoList } = useContext(TodoContext);
  return (
    <ul className="list-group shadow mt-4">
      {todoList.map((el) => (
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
