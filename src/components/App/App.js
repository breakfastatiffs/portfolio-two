import React from 'react'
import About from '../About'
import Projects from '../Projects'
import Header2 from '../Header/Header2'
import './App.css'

function App() {
  return (
    <>
      <Header2 />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}
export default App;