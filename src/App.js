import React from 'react';
import Navigation from './Navigation.js';
import './App.css';

function Hero(props) {
  return (
    <div className="Hero navElement" id={props.id}>
      Hero
    </div>
  );
}

function AboutMe(props) {
  return (
    <div className="AboutMe navElement" id={props.id}>
      About
    </div>
  );
}

function Projects(props) {
  return (
    <div className="Projects navElement" id={props.id}>
      Projects
    </div>
  );
}

function Contact(props) {
  return (
    <div className="Contact navElement" id={props.id}>
      Contact
    </div>
  );
}

function App() {
  return (
    <div className="App theme-dark">
      <Hero id="Home" />
      <Navigation id="Navigation" />
      <AboutMe id="About" />
      <Projects id="Projects" />
      <Contact id="Contact" />
    </div>
  );
}

export default App;