import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Gear from './pages/Gear';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/gear">Gear</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
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
