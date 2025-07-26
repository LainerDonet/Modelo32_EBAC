// src/components/Song/Song.js
import React from 'react';
import {
  SongContainer,
  SongInfo,
  SongImage,
  SongDetails,
  SongTitle,
  SongArtist,
  SongDuration
} from './Song.styles';

function Song({ title, artist, duration, imagen, isHighlighted = false }) {
  return (
    <SongContainer $isHighlighted={isHighlighted}>
      <SongInfo>
        <SongImage src={imagen} alt={title} />
        <SongDetails>
          <SongTitle $isHighlighted={isHighlighted}>{title}</SongTitle>
          <SongArtist>{artist}</SongArtist>
        </SongDetails>
      </SongInfo>
      <SongDuration $isHighlighted={isHighlighted}>{duration}</SongDuration>
    </SongContainer>
  );
}

export default Song;
