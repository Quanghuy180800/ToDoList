import React, { useState, useEffect } from "react";
import Todos from "./Todo";
import SelectTodo from "./SelectTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      const storedList = JSON.parse(localStorage.getItem("todos"));
      if (storedList)
      setTodos(storedList);
  },[]);

  const addTodos = (title) => {
    let newTodos = [...todos];
    newTodos.push({status: "UnCompleted", title, display: true });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    console.log(newTodos);
  }

  const CheckTodos = (index) => {
    let newTodos = [...todos];
    newTodos[index].status = newTodos[index].status === 'Completed' ? 'UnCompleted' : 'Completed';
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    
  };

  const removeTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const ChangeOptionTodos = (isCompleted) => {
    let newTodos = [];

    if (isCompleted === 'All') {
      let items = [...todos].map(t => ({...t, display: true}));
      setTodos(items);
      return false;
    }

    for(let i=0;i<todos.length;i++) {
      let item = {...todos[i]}
      if(todos[i].status === isCompleted) {
        item.display = true
      } else {
        item.display = false
      }
      newTodos.push(item)
    }
    setTodos(newTodos);
  };

  // const UpdateTodos = (index) => {

  // }

  return (
    <div className="todo-list">
      <div className="todos-top">
        <Todos addTodos={addTodos} />
        <SelectTodo ChangeOptionTodos={ChangeOptionTodos} />
      </div>

      {todos.map((item, index) => (
        item.display && <div className="todo" key={index}>
        <span
          className={
            item.status === "Completed" ? "todo-text todo-completed" : "todo-text"
          }
        >
          {item.title}
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