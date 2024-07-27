import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>My name is Jacob Jensen. I am a freelance broadcast and ENG camera operator based in St. Paul, MN. Proud member of the National Press Photographer's Association (NPPA) and IATSE Local 745.</p>

      <div className="credits">
        <div className="broadcast-credits">
          <h2>Select Broadcast Credits</h2>
          <ul>
            <li>2024 Big Ten Conference NCAA Men & Women's Tournament</li>
            <li>2024 Men's Gymnastic's Olympic Trials</li>
            <li>2023 Women's National Collegiate Ice Hockey Championship</li>
            <li>2023 League's Cup</li>
            <li>2022 Women's Final Four</li>
            <li>Carin Leon concert</li>
            <li>CHAMP Off-road Racing</li>
            <li>Ignite Fights</li>
            <li>Kat Williams standup</li>
            <li>Kevin Hart standup</li>
            <li>Melanie Martinez concert</li>
            <li>Minnesota Gophers</li>
            <li>Minnesota Lynx</li>
            <li>Minnesota Timberwolves</li>
            <li>Minnesota United FC</li>
            <li>Minnesota Wild</li>
          </ul>
        </div>

        <div className="documentary-credits">
          <h2>Select Documentary Credits</h2>
          <ul>
            <li>The Killer Next Door - Fox Nation - Assistant Producer</li>
            <li>Serial Killer: Devil Unchained - Discovery Plus - Production Assistant</li>
            <li>I Was There - History Channel - Production Assistant</li>
            <li>The Last Pope? - History Channel - Production Assistant</li>
            <li>Pope Francis Headliners - MSNBC - Production Assistant</li>
            <li>Sexual Assault in College: Tamron Hall Investigates - NBC - Production Assistant</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;