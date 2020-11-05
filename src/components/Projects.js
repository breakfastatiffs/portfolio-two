import React from 'react'
import alt from '../photos/alt.JPG'
import ssr from '../photos/ssr.JPG'
import ee from '../photos/ee.JPG'

export default function Projects() {
    
    return (
        <main className='pro-outer'>

            <div className='pro-inner'>
            <h3>Altergencies</h3>
                <img src={alt} alt='Altergencies screenshot'/>
                <p></p>
                <a href='https://nhresource-client.vercel.app/' className='fa fa-share-alt' target='_blank'> Live App</a>
                <a href='https://github.com/breakfastatiffs/nh-resource-client' className='fa fa-github-alt' target='_blank'> GitHub Client</a>
                <a href='https://github.com/breakfastatiffs/nh-resources-server' className='fa fa-github-alt' target='_blank'> GitHub Server</a>
                <hr className='style' />
                <p>Altergencies is a compilation of emergency and non-emergency contacts for NH. By clicking a resource (business name), a user will be directed to the business's resource page which houses click-through links to call the business, access the business's website, and even their social media pages (if applicable). Users can view the list of resources, view by ID, and are able to add resources, edit existing resources, and delete resources.</p>
                <p>FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.</p>
                <p>BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.</p>
            </div>

            <div className='pro-inner'>
            <h3>Endless Encounters</h3>
                <img src={ee} alt='Endless Encounters screenshot'/>
                <p></p>
                <a href='https://endless-encounters-chi.vercel.app/' className='fa fa-share-alt' target='_blank'> Live App</a>
                <a href='https://github.com/EndlessEncounters/client' className='fa fa-github-alt' target='_blank'> GitHub Client</a>
                <a href='https://github.com/EndlessEncounters/server' className='fa fa-github-alt' target='_blank'> GitHub Server</a>
                <hr className='style' />
                <p>Endless Encounters is a text-based RPG ("Role-Playing Game") developed by EE: John Pendergast, Alexis Felts, Scott Whiteman, and Tiffany Summerford. Once you're in, you can explore a whole new world in search of ravenous enemies to duel swords with or visit the tavern to discuss rumors. Endless Encounters includes randomly generated events and actions/abilities to react with.</p>
                <p>FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.</p>
                <p>BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.</p>
            </div>

            <div className='pro-inner'>
            <h3>Spanish SRS</h3>
                <img src={ssr} alt='Spanish SRS screenshot'/>
                <p></p>
                <a href='https://language-spaced-repetition.vercel.app/' className='fa fa-share-alt' target='_blank'> Live App</a>
                <a href='https://github.com/thinkful-ei-quail/SR-Client-johnb-tiff' className='fa fa-github-alt' target='_blank'> GitHub Client</a>
                <a href='https://github.com/thinkful-ei-quail/SR-API-johnb-tiff' className='fa fa-github-alt' target='_blank'> GitHub Server</a>
                <hr className='style' />
                <p>Spaced repetition is an advanced learning technique that enhances ones learning through an algorithm based upon repetition. The learner is quizzed on a sequence of words and when the learner answers incorrectly, they will see the word within a shorter period versus if they answer correctly, they will see the word in a longer period. With the number of Spanish speakers on the rise and Halloween right around the corner, Spanish SRS was built with amusement and utility in mind.</p>
                <p>Front End: React, JavaScript, Cypress, CSS3, HTML5, Vercel</p>
                <p>Back End: Express, JavaScript, PostgreSQL, Heroku, Mocha & Chai</p>
            </div>
            
        </main>
    )
}