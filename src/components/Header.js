import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Header () {
    function toggleShow(e) {
        e.preventDefault()
        document.getElementById('dropContent').classList.toggle('show')
    }
    return (
        <header>
          <h1>Tiffany Summerford</h1>
          <nav>
          <ul>
            <li>
              <button onClick={(e)=> toggleShow(e)} className='fa fa-bars'></button>
            </li>
            <div className='dropContent' id='dropContent'>
                <li>
                  <a href='mailto:TiffanySummerford@gmail.com?subject=Great%20Portfolio!' class='fa fa-envelope'>Email</a>
                </li>
                <li>
                  <a href='https://docs.google.com/document/d/197BVM5qzyqYR3YKwqyubg3gBn4josekLuRtmG_Cyh0o/edit?usp=sharing' target='_blank' className='fa fa-folder-open-o'>Resume</a>
                </li>
                <li>
                  <a href='https://github.com/breakfastatiffs/' target='_blank' className='fa fa-github-alt'>GitHub</a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/tiffany-summerford' target='_blank' className='fa fa-linkedin-square'>LinkedIn</a>
                </li>
            </div>
          </ul>
        </nav>
        </header>
    )
}