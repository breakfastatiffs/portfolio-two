import React from 'react'
import selfie from '../photos/selfie.JPG'

export default function About() {
    return (
        <section className='about-sect'>
            <img src={selfie} alt='self potrait of Tiffany Summerford' className='selfie'/>
            <p className='body-p'>My name is Tiffany Summerford and I'm a full-stack engineer from the Greater Boston area. 
            As a retired bartender with a "minor in marketing", I hold the skills to communicate effectively with a team, the creativity to design apps, 
            and the wit to absolve problems quickly. Working in restaurants taught me a lot about how the world works and I account for that experience as to 
            why I am the way I am. I’ve always been more interested in working on the front end of things, but I believe having an understanding of the entire
             house is key. Hence my interest and education as a full-stack developer. If you're interested in learning more about me, let's video chat over 
             some hot coffee.
                </p>
        </section>
    )
}