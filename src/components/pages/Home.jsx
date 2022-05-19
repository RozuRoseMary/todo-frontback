import React from "react";
import TodoInput from "../todo-list/TodoInput";
import TodoList from "../todo-list/TodoList";

function Home() {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default Home;
