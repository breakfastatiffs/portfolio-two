import React from 'react'

export default function Header () {
    return (
        <header>
          <h1>Tiffany Summerford</h1>
          <h2>Software Engineer</h2>
          <ul>
            <li>
              <button to='/about'>About</button>
            </li>
            <li>
              <button to='/projects'>Projects</button>
            </li>
            <li>
              <button to='/contact'>Contact</button>
            </li>
          </ul>
        </header>
    )
}