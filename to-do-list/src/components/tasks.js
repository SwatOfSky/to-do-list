import React, {useState} from 'react'
import './tasks.css'
import Adding from "./adding";
import Task from "./Todo";
import {AiFillStar, AiOutlineStar} from "react-icons/all";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (!task.text || /^\s*$/.test(task.text)) {
            return;
        }
        const newTask = [task, ...tasks];

        setTasks(newTask);
    };
    

    const updateTask = (taskId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
    }
        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
    }


    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)
        setTasks(removeArr)
    }

    // const changePriority = id => {
    //     let updatedTasks = tasks.map(task => {
    //         if (task.priority === true) {
    //             task.isPriority = !task.isPriority
    //         }
    //     })
    // }

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
        <Adding onSubmit={addTask} />
        <Task tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
    </div>
}