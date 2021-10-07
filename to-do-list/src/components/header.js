import React from "react"
import './header.css'
import Tasks from "./tasks";

export default function Header() {

    const Test = () => {

    }

    return <div className='header'>
        <div className='header_text'><span>To Do List</span></div>
        <div className='header_search'><input placeholder="Search" /></div>
    </div>
}