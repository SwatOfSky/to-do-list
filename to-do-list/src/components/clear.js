import './clear.css'
import React from 'react'

export default function Clear(props){
    const { clearAll } = props;

    return (
        <div className='clear'>
        <button className='clear_button' onClick={clearAll}>Clear items</button>
    </div>
    )
}