import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className='App'>
      <header>
        <Header />
      </header>

          <About />
          <Projects />
          <Contact />
    </main>
  );
}
export default App;