import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Gear from './pages/Gear';
import Contact from './pages/Contact';
import './App.css';
import logo from './pages/transparentLogo.png';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="App">
      <nav>
        <div className="nav-container">
          <Link to="/" className="logo" onClick={() => setMenuActive(false)}>
            <img src={logo} alt="JJ Pictures Logo" />
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuActive ? 'active' : ''}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/work" onClick={toggleMenu}>Work</Link></li>
            <li><Link to="/gear" onClick={toggleMenu}>Gear</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 JJ Pictures. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
