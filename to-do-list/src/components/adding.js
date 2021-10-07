import React, {useState, useEffect, useRef} from 'react'
import "./adding.css"

export default function Adding(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = evt =>{
        setInput(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            priority: false
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
                   ref={inputRef}
                   maxLength="50"

            />
        <button className='formButton'>Add Item </button>
        </form>

    </div>
}