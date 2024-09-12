import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to My Portfolio</h1>
      </header>

      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my personal portfolio website. Here you'll find information about me, my projects, and how to get in touch.</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>Hi, I'm Govind Pandey. I'm a web developer with a passion for creating stunning and functional websites. I have 4 years of coding experience and 2 years of web development experience.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 Govind Pandey</p>
      </footer>
    </div>
  );
}

export default App;
