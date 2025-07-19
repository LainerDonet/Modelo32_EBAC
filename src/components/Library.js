import React from 'react';
import Song from './Song';

function Library({ songs }) {
  return (
    <div className="library">
      {songs.map((song, index) => (
        <Song
          key={index}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          imagen={song.imagen}
        />
      ))}
    </div>
  );
}
export default Library;