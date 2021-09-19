import React, { useState, useEffect } from 'react';
import './Todo.css';
import {useDispatch} from "react-redux"
import Fade from 'react-reveal/Fade';
import { addTask, hapusTask } from '../store/taskSlice';
import { doneTask } from '../store/taskSlice';
import { useSelector } from 'react-redux';
function Task({ task, index, doneTask, hapusTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <button style={{ background: "red" }} onClick={() => hapusTask(index)}>x</button>
            <button onClick={() => doneTask(index)}>Selesai</button>

        </div>
    );
}

function CreateTask({ addTask }) {
    const dispatch = useDispatch()
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value){
            alert("Masih Kosong!!!!")
            return;
            } 
            dispatch(addTask(value));
            setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Buat Tugas Baru"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function Todo() {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.task.tasks)
    const [tasksRemaining, setTasksRemaining] = useState(0);
   
    useEffect(() => { 
        setTasksRemaining(tasks.filter(task => !task.completed).length) 
    
    });


   

    

    return (
    
    <Fade bottom>
        <div className="todo-container">
            
            <h1 style={{textAlign:"center"}}>todos</h1>
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    doneTask={() => {dispatch(doneTask(task))}}
                    hapusTask={() => {dispatch(hapusTask(task))}}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={() => {dispatch(addTask)}} />
            </div>
        </div>
    </Fade>
    );
}

export default Todo;