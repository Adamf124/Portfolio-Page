import React from 'react';
import './App.css';
import Splashpage from './components/SplashPage/Splashpage';
import Navbar from './components/Navbar'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Social from './components/Social/Social';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
  <div>
    <Navbar/>
    <Splashpage/>
    <About />
    <Projects />
    <Social />
    <ContactMe />
  
  </div>
  );
}

export default App;
