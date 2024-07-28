import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  let navigate = useNavigate();

  return (
    <div className="home">
      <video autoPlay muted loop id="background-video">
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
      </video>
      <div className="content">
        <button onClick={() => navigate('/work')}>View Work</button>
      </div>
    </div>
  );
}

export default Home;