import React from 'react'
import Header from '../Header'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import './App.css'

function App() {
  return (
    <main className='App'>
        <Header />
        <About />
        <Projects />
        <Contact />
    </main>
  );
}
export default App;