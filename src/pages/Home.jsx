import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Abhishek Patel</span></h1>
        <h2>A Passionate Web Developer</h2>
        <p>I build beautiful, responsive, and engaging digital experiences.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn primary-btn">View My Work</Link>
          <Link to="/about" className="btn secondary-btn">About Me</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;