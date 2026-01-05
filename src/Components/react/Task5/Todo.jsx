import React, { useState, useEffect } from 'react'
import "./Todo.css"

const Todo = () => {

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos) setList(savedTodos);
    }, []);

    const [list, setList] = useState([]);
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState();

    const saveToLocalStorage = (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const handleAdd = () => {
        if (edit) {
            const updateArray = [...list];
            updateArray[editId].task = task;
            updateArray[editId].time = time;
            setList(updateArray);
            saveToLocalStorage(updateArray); 
            setEdit(false);
        } else {
            const todo = { task, time, completed: false };
            const newArray = [...list, todo];
            setList(newArray);
            saveToLocalStorage(newArray); 
        }

        setTask('');
        setTime('');
    }

    const handleDelete = (id) => {
        const newArray = list.filter((_, i) => id !== i);
        setList(newArray);
        saveToLocalStorage(newArray);
    }

    const handleEdit = (id) => {
        setTask(list[id].task);
        setTime(list[id].time);
        setEdit(true);
        setEditId(id);
    }

    const toggleComplete = (id) => {
        const updatedList = [...list];
        updatedList[id].completed = !updatedList[id].completed;
        setList(updatedList);
        saveToLocalStorage(updatedList);
    }

    return (
        <div className='todo-wrapper'>
            <div className='gapp'>

                <input placeholder='Title' className='titlename' value={task}
                type='text'
                onChange={(e) => setTask(e.target.value)} /> 

                <input placeholder='Time' className='timeset' value={time}
                type='time'
                onChange={(e) => setTime(e.target.value)} />

                <button onClick={handleAdd} className='UPAD'>{edit ? "Update" : "Add"}</button>
            </div>
            <div className='todo-list-wrapper'>
                <ul className='todo-list'>

                    {list.map((data, index) => (
                        <li key={index}
                            className={data.completed ? "task-done" : ""}>

                            {data.task} - {data.time}
                            
                            <button onClick={() => toggleComplete(index)}>
                                {data.completed ? "Undo" : "Complete"}
                            </button>

                            <button id='btn1' onClick={() => handleEdit(index)}>
                                Edit
                            </button>

                            <button id='btn2' onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Todo;
 