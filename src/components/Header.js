import React from 'react'

export default function Header () {
    function toggleShow(e) {
        e.preventDefault()
        document.getElementById('dropContent').classList.toggle('show')
    }
    return (
        <header>
          <h1>Tiffany Summerford</h1>
          <h2>Software Engineer</h2>

          <nav>
          <ul>
            <li>
              <button onClick={(e)=> toggleShow(e)}> ☾ </button>
            </li>
            <div className='dropContent' id='dropContent'>
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
          </ul>
        </nav>
        </header>
    )
}