import React from 'react'

export default function Projects() {
    return (
        <main className='proOuter'>

            <div className='proInner'>
            <h3>Altergencies</h3>
                <img />
                <h4>Description:</h4>
                <p>Altergencies is a compilation of emergency and non-emergency contacts for NH. By clicking a resource (business name), a user will be directed to the business's resource page which houses click-through links to call the business, access the bussiness's website, and even their social-media pages (if applicable). Users can view the list of resources, view by ID and are able to add resources, edit existing resources, and delete resources.</p>
                <h4>Skills Used:</h4>
                <p>FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.</p>
                <p>BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.</p>
                <a href='https://nhresource-client.vercel.app/'>Live App</a>
                <a href='https://github.com/breakfastatiffs/nh-resource-client'>GitHub Client</a>
                <a href='https://github.com/breakfastatiffs/nh-resources-server'>GitHub Server</a>
            </div>

            <div className='proInner'>
            <h3>Endless Encounters</h3>
                <img />
                <h4>Description:</h4>
                <p>Endless Encounters is a text-based RPG ("Role Playing Game") developed by Emotionally Exhausted. Once you're in, you can explore a whole new world in search of ravenous enemies to duel swords with or visit the tavern to discuss rumors. Endless Encounters includes randomly generated events and actions/abilities to respond with.</p>
                <h4>Skills Used:</h4>
                <p>FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.</p>
                <p>BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.</p>
                <a href='https://endless-encounters.vercel.app/'>Live App</a>
                <a href='https://github.com/EndlessEncounters/client'>GitHub Client</a>
                <a href='https://github.com/EndlessEncounters/server'>GitHub Server</a>
            </div>

            <div className='proInner'>
            <h3>Spanish SR</h3>
                <img />
                <h4>Description:</h4>
                <p>Spaced repetition is an advanced learning technique that enhances ones learning through an algorithm based upon repetition. The learner is quizzed on a sequence of words and when the learner answers incorrectly, they will see the word within a shorter time period versus if they answer correctly, they will see the word in a longer time period. With the number of Spanish speakers on the rise and halloween right around the corner, Spanish SRS was built with amusement and utility in mind.</p>
                <h4>Skills Used:</h4>
                <p>Front End: React, JavaScript, Cypress, CSS3, HTML5, Vercel</p>
                <p>Back End: Express, JavaScript, PostgreSQL, Heroku, Mocha & Chai</p>
                <a href='https://language-spaced-repetition.vercel.app/'>Live App</a>
                <a href='https://github.com/thinkful-ei-quail/SR-Client-johnb-tiff'>GitHub Client</a>
                <a href='https://github.com/thinkful-ei-quail/SR-API-johnb-tiff'>GitHub Server</a>
            </div>
            
        </main>
    )
}