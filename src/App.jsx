import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import './App.css';

function Layout({ children }) {
  return (
    <div className="portfolio-app">
      <header className="navbar">
        <div className="logo">MyPortfolio.</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer-section">
        <h2>Let's Work Together</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className="social-links">
          <a href="https://github.com/Abhishek-030" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:24aiml030@charusat.edu.in">Email Me</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Abhishek Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;