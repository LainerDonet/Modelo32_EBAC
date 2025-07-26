// src/components/Library/Library.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  LibraryContainer,
  EmptyLibrary,
  LibraryStats,
  StatsText,
  ClearButton
} from './Library.styles';

// Reutilizamos algunos estilos de SearchResults
import { 
  AlbumsGrid as SearchAlbumsGrid,
  AlbumCard as SearchAlbumCard,
  AlbumLink as SearchAlbumLink,
  AlbumCover as SearchAlbumCover,
  AlbumImage as SearchAlbumImage,
  AlbumInfo as SearchAlbumInfo,
  AlbumTitle as SearchAlbumTitle,
  AlbumArtist as SearchAlbumArtist,
  AlbumYear as SearchAlbumYear
} from '../SearchResults/SearchResults.styles';

function Library({ albums = [], onClearLibrary }) {
  if (albums.length === 0) {
    return (
      <LibraryContainer>
        <EmptyLibrary>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          <p>Tu biblioteca está vacía</p>
          <p>Busca artistas y añade álbumes a tu biblioteca personal</p>
        </EmptyLibrary>
      </LibraryContainer>
    );
  }

  return (
    <LibraryContainer>
      <LibraryStats>
        <StatsText>
          <strong>{albums.length}</strong> {albums.length === 1 ? 'álbum' : 'álbumes'} en tu biblioteca
        </StatsText>
        <ClearButton onClick={onClearLibrary}>
          Limpiar biblioteca
        </ClearButton>
      </LibraryStats>
      
      <SearchAlbumsGrid>
        {albums.map((album) => (
          <SearchAlbumCard key={album.idAlbum}>
            <SearchAlbumLink as={Link} to={`/album/${album.idAlbum}`}>
              <SearchAlbumCover>
                <SearchAlbumImage 
                  src={album.strAlbumThumb || '/img/default-album.png'} 
                  alt={album.strAlbum}
                  onError={(e) => {
                    e.target.src = '/img/default-album.png';
                  }}
                />
              </SearchAlbumCover>
              <SearchAlbumInfo>
                <SearchAlbumTitle>{album.strAlbum}</SearchAlbumTitle>
                <SearchAlbumArtist>{album.strArtist}</SearchAlbumArtist>
                <SearchAlbumYear>{album.intYearReleased || 'Año desconocido'}</SearchAlbumYear>
              </SearchAlbumInfo>
            </SearchAlbumLink>
          </SearchAlbumCard>
        ))}
      </SearchAlbumsGrid>
    </LibraryContainer>
  );
}

export default Library;