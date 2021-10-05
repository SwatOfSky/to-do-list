import React, {useState} from 'react'
import "./adding.css"

export default function Adding(props) {
    const [input, setInput] = useState('')

    const handleChange = evt =>{
        setInput(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };



    return <div className='adding'>
        <form onSubmit={handleSubmit}>
            <input placeholder='Name...'
                   value={input}
                   type='text'
                   name='text'
                   className='adding_input'
                   onChange={handleChange}
            />
        <button>Add Item </button>
        </form>

    </div>
}