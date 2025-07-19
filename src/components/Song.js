// src/components/Song.js
import React from 'react';

function Song({ title, artist, duration, imagen }) {
  return (
    <div className="song">
      <div className="song-info">
          <img src={imagen} alt={title} className="song-image" />
          <div className="song-details">
            <h2>{title}</h2>
            <p>{artist}</p>
          </div>
        </div>
        <div className="song-duration">{duration}</div>
    </div>
  );
}

export default Song;
