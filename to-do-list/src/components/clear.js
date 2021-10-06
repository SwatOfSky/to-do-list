import './clear.css'
import React from 'react'

export default function Clear(props){
    const { clearAll } = props;

    return (
        <div className='clear'>
        <button onClick={clearAll}>Clear items</button>
    </div>
    )
}