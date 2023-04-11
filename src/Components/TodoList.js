import React, { useState, useEffect } from "react";
import Todos from "./Todo";
import SelectTodo from "./SelectTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashCan, faEdit } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todos"));
    if (storedList) setTodos(storedList);
  }, []);

  const addTodos = (title) => {
    let newTodos = [...todos];
    newTodos.push({
      status: "UnCompleted",
      title,
      display: true,
      editing: false,
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log(newTodos);
  };

  const CheckTodos = (index) => {
    let newTodos = [...todos];
    newTodos[index].status =
      newTodos[index].status === "Completed" ? "UnCompleted" : "Completed";
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const removeTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const ChangeOptionTodos = (isCompleted) => {
    let newTodos = [];

    if (isCompleted === "All") {
      let items = [...todos].map((t) => ({ ...t, display: true }));
      setTodos(items);
      return false;
    }

    for (let i = 0; i < todos.length; i++) {
      let item = { ...todos[i] };
      if (todos[i].status === isCompleted) {
        item.display = true;
      } else {
        item.display = false;
      }
      newTodos.push(item);
    }
    setTodos(newTodos);
  };

  const HandleUpdate = (index) => {
    let updateTodos = [...todos];
    updateTodos[index].editing = !updateTodos[index].editing;
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  };

  const UpdateTodos = (index) => {
    let newTodos = [...todos];
    if (edit === "") {
      toast.success("Type something ...", { 
        autoClose: 2500,
        className: 'toast-message' });
    } else {
      newTodos[index] = {...newTodos[index], title: edit};
      newTodos[index].editing = !newTodos[index].editing;
      setTodos(newTodos);
      setEdit("");
      localStorage.setItem("todos", JSON.stringify(newTodos));

    }
      

  }

  return (
    <div className="todo-list">
      <ToastContainer/>
      <div className="todos-top">
        <Todos addTodos={addTodos} />
        <SelectTodo ChangeOptionTodos={ChangeOptionTodos} />
      </div>

      {todos.map(
        (item, index) =>
          item.display && (
            <div className="todo" key={index}>
              {item.editing ? (
                <input
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
              ) : (
                <span
                  className={
                    item.status === "Completed"
                      ? "todo-text todo-completed"
                      : "todo-text"
                  }
                >
                  {item.title}
                </span>
              )}
              {item.editing ? (
                <div>
                <button
                onClick={(e) => UpdateTodos(index)}>
                <FontAwesomeIcon icon={faCheckSquare} />
                </button>
                </div>
              ) : (
                <div className="btn">
                <button onClick={() => HandleUpdate(index)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => CheckTodos(index)}>
                  <FontAwesomeIcon icon={faCheckSquare} />
                </button>
                <button onClick={() => removeTodos(index)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
              )}
              
            </div>
          )
      )}
    </div>
  );
}

export default TodoList;
