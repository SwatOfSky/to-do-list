import React from "react"
import './header.css'

export default function Header() {
    return <div className='header'>
        <div className='header_text'><span>TO DO LIST</span></div>
        <div className='header_search'><input placeholder="Search"/></div>
    </div>
}