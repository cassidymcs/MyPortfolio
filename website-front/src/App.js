import React from 'react';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import cass from './assets/cass.png';
import GitHub_Logo from './assets/GitHub_Logo.png';
import link_logo from './assets/link_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
              <Navbar />
        <Section
          title="Section 1"
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          dark={true}
          id="section5"
        />
      <img src={cass} className="grad-photo" alt="cassidy" />
        <p>
          Cassidy McSkimming
        </p>
        <a
          className="App-link"
          href="https://github.com/cassidymcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub_Logo} alt="My GitHub" className="git"/>
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/cassidy-mcskimming-11975a160/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link_logo} alt="My Linkedin" className="linked"/>
        </a>
    </div>
  );
}

export default App;
