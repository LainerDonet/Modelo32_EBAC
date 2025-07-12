// src/components/Song.js
import React from 'react';

class Song extends React.Component {
render() {
    const { title, artist, duration, imagen } = this.props;
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
}

export default Song;
