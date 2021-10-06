import React, {useState} from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {MdOutlineTaskAlt} from 'react-icons/md';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Adding from "./adding";
import './Todo.css'

export default function Task({ tasks, completeTask, removeTask, updateTask, props}){
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        rating: false
    });

    const onChange = {tasks , props };

    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <Adding edit={edit} onSubmit={submitUpdate} />
    }

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
                <div onClick={() => onChange(task.key, 'rating')}>
                    {task.rating ? <AiFillStar /> : <AiOutlineStar /> }
                </div>
                <MdOutlineTaskAlt
                onClick={() => completeTask(task.id)}
                />
                <BiEdit
                onClick={() => setEdit({id: task.id, value: task.text})}
                className='edit-icon'
                />
                <AiOutlineCloseCircle
                onClick={() => removeTask(task.id)}
                className='delete-icon'
                />
            </div>
        </div>
    ));

    return testTwo
}