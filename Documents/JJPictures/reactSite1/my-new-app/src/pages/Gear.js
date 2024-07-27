import React from 'react';
import './Gear.css';

function Gear() {
  return (
    <div className="gear">
      <h1>Gear</h1>

      <div className="gear-row">
        <div className="gear-section">
          <h2>Camera</h2>
          <ul>
            <li>Sony PXW-FS7</li>
            <li>DJI Osmo Pocket 3</li>
            <li>Manfrotto 503HDV tripod</li>
          </ul>
        </div>

        <div className="gear-section">
          <h2>Lens</h2>
          <ul>
            <li>Nikon AF-S NIKKOR 17-35mm f/2.8G ED Lens</li>
            <li>Nikon AF-S NIKKOR 28-70mm f/2.8G ED Lens</li>
            <li>Nikon AF-S NIKKOR 80-200mm f/2.8G ED Lens</li>
            <li>Metabones Nikon F-Mount Lens to Sony E-Mount Camera Speed Booster ULTRA</li>
          </ul>
        </div>
      </div>

      <div className="gear-row">
        <div className="gear-section">
          <h2>Audio</h2>
          <ul>
            <li>Zoom H4n</li>
            <li>Audio Technica AT875R Shotgun Condenser Microphone</li>
            <li>XLR Cables - 50 ft, 10 ft, 1 ft</li>
          </ul>
        </div>

        <div className="gear-section">
          <h2>Lighting</h2>
          <ul>
            <li>x1 Arri Fresnel 650w</li>
            <li>x1 Arri Fresnel 300w</li>
            <li>x2 Arri Fresnel 150w</li>
            <li>x1 SmallRig RM120 RGB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gear;
