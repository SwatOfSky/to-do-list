import React, {useState} from 'react';
import Tasks from "./tasks";
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {MdOutlineTaskAlt} from 'react-icons/md';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineCloseCircle} from 'react-icons/ai';

export default function Task({ tasks, completeTask }){
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

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
                <AiFillStar /> <AiOutlineStar />
                <MdOutlineTaskAlt />
                <BiEdit />
                <AiOutlineCloseCircle />
            </div>
        </div>
    ));

    return {testTwo}
}