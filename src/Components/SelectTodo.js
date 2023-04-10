import React, {useState} from 'react';

function SelectTodo({ getTodos }) {
    const [isCompleted, setIsCompleted] = useState("");

    const handleChangeOption = (e) => {
        setIsCompleted(e.target.value);
        getTodos(isCompleted);
    }
    return (
        <div>
            <select className='select' onChange={handleChangeOption}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="UnCompleted">UnCompleted</option>
            </select>
        </div>
    );
}

export default SelectTodo;