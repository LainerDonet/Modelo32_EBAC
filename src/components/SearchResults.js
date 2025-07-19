import React from 'react';
import Song from './Song';

function SearchResults({ songs, onAddToLibrary }) {
  return (
    <div className="search-results">
      {songs.map((song, index) => (
        <div key={index} className="search-result-item">
          <Song
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            imagen={song.imagen}
          />
          <button className="ytmusic-btn" onClick={() => onAddToLibrary(song)}>
            Agregar a mi biblioteca
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;