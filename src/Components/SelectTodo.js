import React from 'react';

function SelectTodo({ ChangeOptionTodos }) {

    const handleChangeOption = (e) => {
        ChangeOptionTodos(e.target.value);
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