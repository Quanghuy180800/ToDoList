import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePlus} from '@fortawesome/free-regular-svg-icons'



function Todo({ addTodos }) {

  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTodos(value)
    setValue("");
  };




  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter Here..."
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit"><FontAwesomeIcon icon={faSquarePlus}/></button>
    </form>
  );
}


export default Todo;