import React from 'react';
import './App.css';
import img from './images/image.png'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Phoenix Hackathon 2023</div>
        <ul className="nav-links">
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#prizes">Prizes</a>
          <a href="#register">Register</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>
      <main className="main">
        <section 
        style={{ backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}
         className="section" >
          <h2 class="anchor"><span id="about"></span></h2>
          <h2>About</h2>
          <p>
            The Phoenix Hackathon 2023 is a gathering of brilliant minds and innovative thinkers from around the world.
            Join us for an unforgettable weekend of coding, collaboration, and creation.
          </p>
          <p>
            Our mission is to provide a platform for aspiring developers to showcase their skills, network with industry professionals, and transform ideas into reality.
          </p>
        </section>
        <section className="section">
          <h2 class="anchor"><span id="schedule"></span></h2>
          <h2>Schedule</h2>
          <div>
            <p>Friday: Opening Ceremony & Team Formation</p>
            <p>Saturday: Hacking Sessions & Workshops</p>
            <p>Sunday: Project Presentations & Closing Ceremony</p>
          </div>
        </section>
        <section className="section">
          <h2 class="anchor"><span id="prizes"></span></h2>
          <h2>Prizes</h2>
          <p>Exciting prizes await the winners of various categories, including:</p>
          <div>
            <p>Best Overall Hack</p>
            <p>Most Innovative Hack</p>
            <p>Best Design</p>
            <p>Best Use of Technology</p>
          </div>
        </section>
        <section className="section">
          <h2 class="anchor"><span id="register"></span></h2>
          <h2>Register</h2>
          <p>Don't miss out on this incredible opportunity. Register now to secure your spot!</p>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="submit" value="Register" className="register-btn" />
          </form>
        </section>
        <section className="section">
          <h2 class="anchor"><span id="sponsors"></span></h2>
          <h2>Sponsors</h2>
          <p>We would like to express our gratitude to our generous sponsors for their support:</p>
          <div>
            <p>Company A</p>
            <p>Company B</p>
            <p>Company C</p>
          </div>
        </section>
        <section className="section">
          <h2 class="anchor"><span id="contact"></span></h2>
          <h2>Contact</h2>
          <p>If you have any questions or inquiries, please feel free to reach out to us:</p>
          <div>
            <p>Email: info@phoenixhackathon2023.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Phoenix Hackathon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
