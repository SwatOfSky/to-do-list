import React, {useState} from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {MdOutlineTaskAlt} from 'react-icons/md';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Adding from "./adding";
import './Todo.css'

export default function Task({ tasks, completeTask, removeTask, updateTask}){
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value: '',
        })
    }

    if (edit.id) {
        return <Adding edit={edit} onSubmit={submitUpdate} />
    }
    console.log(Task)

let testTwo;
 testTwo = tasks.map((task, index) => (
        <div
            className={task.isComplete ? 'task-row complete' : 'task-row'}
            key={index}
        >
            <div key={task.id} onClick={() => completeTask(task.id)}>
                {task.text}
            </div>
            <div className='icons'>
                <div className="icon-star">   <AiOutlineStar
                // onClick={ () => }
                />
                </div>
                <div className="icon-done"><MdOutlineTaskAlt
                onClick={() => completeTask(task.id)}
                /></div>
            <div className="icon-edit"><BiEdit
                onClick={() => setEdit({id: task.id, value: task.text})}
                className='edit-icon'
                /></div>
            <div className="icon-close"><AiOutlineCloseCircle
                onClick={() => removeTask(task.id)}
                className='delete-icon'
                /></div>
            </div>
        </div>
    ));

    return testTwo
}