import React from 'react';
import './App.css';
import githubLogo from './github-logo.png'; // Make sure to add this image to your `src` directory

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio Website</h1>
      </header>

      <main>
        <section id="work-in-progress">
          <h2>Work in Progress</h2>
          <p>We're currently working on building my portfolio website. Check back soon for updates!</p>
          <a href="https://github.com/govindup63" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
            <span>Visit my GitHub</span>
          </a>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Govind Pandey</p>
      </footer>
    </div>
  );
}

export default App;
