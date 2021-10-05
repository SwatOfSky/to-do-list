import React, {useState} from 'react'
import './tasks.css'
import Adding from "./adding";
import Task from "./Todo";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (!task.text || /^\s*$/.test(task.text)) {
            return;
        }
        const newTask = [task, ...tasks];

        setTasks(newTask);
    };

    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks);
    }


    return <div className='tasks'>
        <div className='tasks_list'>Tasks</div>
        <div className='tasks_icons'>Icons</div>
        <Adding onSubmit={addTask} />
        <Task />
    </div>
}