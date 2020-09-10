import React from 'react';
import cass from './assets/cass.png';
import GitHub_Logo from './assets/GitHub_Logo.png';
import link_logo from './assets/link_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={cass} className="grad-photo" alt="cassidy" />
        <p>
          Cassidy McSkimming Software Engineer
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
        </header>
    </div>
  );
}

export default App;
