import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Todo({ addTodos }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      toast.success("Type something ...", { 
        autoClose: 2500,
        className: 'toast-message' });
    } else {
      addTodos(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <input
        type="text"
        value={value}
        placeholder="Enter Here..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSquarePlus} />
      </button>
    </form>
  );
}

export default Todo;
