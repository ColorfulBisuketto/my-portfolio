import React, { useState , useEffect } from 'react';
import './App.css';

import Navigation from './Navigation.js';
import Hero from './Hero.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

function App() {
  const [theme, setTheme] = useState('theme-dark');

  return (
    <div className={`App ${theme}`}>
      <Hero id="Home" />
      <Navigation id="Navigation" theme={theme} setTheme={setTheme} />
      <AboutMe id="About" />
      <Projects id="Projects" />
      <Contact id="Contact" />
    </div>
  );
}

export default App;