// src/components/Library/Library.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';
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

// Componente para el botón de eliminar individual
import styled from 'styled-components';

const RemoveButton = styled.button`
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  opacity: 0;
  
  ${SearchAlbumCard}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background: #ff5252;
    transform: scale(1.05);
  }
`;

const LibraryAlbumCard = styled(SearchAlbumCard)`
  position: relative;
`;

function Library() {
  const albums = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRemoveSong = (albumId) => {
    dispatch(removeSong(albumId));
  };

  const handleClearLibrary = () => {
    // Eliminar todos los álbumes uno por uno
    albums.forEach(album => {
      dispatch(removeSong(album.idAlbum));
    });
  };

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
        <ClearButton onClick={handleClearLibrary}>
          Limpiar biblioteca
        </ClearButton>
      </LibraryStats>
      
      <SearchAlbumsGrid>
        {albums.map((album) => (
          <LibraryAlbumCard key={album.idAlbum}>
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
            <RemoveButton 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemoveSong(album.idAlbum);
              }}
              title="Eliminar de la biblioteca"
            >
              ✕
            </RemoveButton>
          </LibraryAlbumCard>
        ))}
      </SearchAlbumsGrid>
    </LibraryContainer>
  );
}

export default Library;