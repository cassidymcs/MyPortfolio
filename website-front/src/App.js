import React from 'react';
import cass from './cass.png';
import GitHub_Logo from './GitHub_Logo.png';
import link_logo from './link_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
