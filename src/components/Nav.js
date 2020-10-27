import React from 'react'
import './App/App.css'

export default function Nav() {
    return (
        <div className='dropContent'>
        <li>
          <a to='/about'>About</a>
        </li>
        <li>
          <a to='/projects'>Projects</a>
        </li>
        <li>
          <a to='/contact'>Contact</a>
        </li>
    </div>
    )
}