import React from 'react';
import './Work.css';

function Work() {
  return (
    <div className="work">
      <h1>Work</h1>

      <div className="video-row">
        <div className="video-section">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/mHeEmQzmLEw?si=tvQlAXqbrkp0JH2Y"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 1"
            ></iframe>
          </div>
        </div>
        <div className="video-section">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/2nqt80UYiIA?si=KZlaiV4HsXzQM0OY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 2"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="video-row">
        <div className="video-section">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/R9f9LO9R6XQ?si=hTy7FAZJAhqYJEaN"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 3"
            ></iframe>
          </div>
        </div>
        <div className="video-section">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/iHMowiYY_no?si=flOEoA-8jsXPcNg2"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 4"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
