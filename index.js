< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio</title>
          <link rel="stylesheet" href="styles.css">
          </head>
          <body>
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
              <div class="project">
                <h3>Project 1</h3>
                <p>Description of Project 1.</p>
              </div>
              <div class="project">
                <h3>Project 2</h3>
                <p>Description of Project 2.</p>
              </div>
            </section>

            <section id="contact">
              <h2>Contact</h2>
              <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send</button>
                  </form>
                </section>

                <footer>
                  <p>&copy; 2024 Govind Pandey</p>
                </footer>

                <script src="script.js"></script>
              </body>
            </html>
