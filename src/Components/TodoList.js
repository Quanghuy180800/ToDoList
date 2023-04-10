import React, { useState } from "react";
import Todos from "./Todo";
import SelectTodo from "./SelectTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      title: "Monday",
      isCompleted: false,
    },
    {
      title: "Tuesday",
      isCompleted: false,
    },
    {
      title: "Wednesday",
      isCompleted: false,
    },
  ]);

  const addTodos = (title) => {
    setTodos([...todos, { title }]);
  };

  const CheckTodos = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const getTodos = (isCompleted) => {
    const newTodos = [...todos];

    // if (isCompleted === "All") {
    //     setTodos(newTodos);
    // } else if (isCompleted === "Completed") {
    //     const fiTodos = newTodos.filter((li) => li.status !== "Completed");
    //     setTodos(fiTodos);
    // } else {
    //     const fiTodos = newTodos.filter((li) => li.status !== "UnCompleted");
    //     setTodos(fiTodos);
    console.log(newTodos);
    console.log(isCompleted);
  };

  return (
    <div className="todo-list">
      <div className="todos-top">
        <Todos addTodos={addTodos} />
        <SelectTodo getTodos={getTodos} />
      </div>
      {todos.map((todo, index) => (
        <div className="todo">
          <span
            className={
              todo.isCompleted ? "todo-text todo-completed" : "todo-text"
            }
          >
            {todo.title}
          </span>
          <div className="btn">
            <button onClick={() => CheckTodos(index)}>
              <FontAwesomeIcon icon={faCheckSquare} />
            </button>
            <button onClick={() => removeTodos(index)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
