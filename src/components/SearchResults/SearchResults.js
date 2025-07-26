// src/components/SearchResults/SearchResults.js
import React from 'react';
import Song from '../Song/Song';
import {
  LoadingContainer,
  LoadingText,
  ErrorContainer,
  ErrorText,
  NoResultsContainer,
  NoResultsText,
  SongList,
  SearchResultsContainer,
  ResultsTitle,
  AlbumsGrid,
  AlbumCard,
  AlbumLink,
  AlbumCover,
  AlbumImage,
  AlbumInfo,
  AlbumTitle,
  AlbumArtist,
  AlbumYear,
  AddToLibraryButton,
  RetryButton
} from './SearchResults.styles';

function SearchResults({ albums, loading, error, onRetry, searchTerm, onAddToLibrary, library = [] }) {
  // Función para verificar si un álbum ya está en la biblioteca
  const isAlbumInLibrary = (albumId) => {
    return library.some(item => item.idAlbum === albumId);
  };

  // Canciones estáticas que siempre se muestran
  const staticSongs = [
    { title: "Heterocomía", artist: "Belinda", duration: "3:51", imagen: "/img/heterocromia.png", isHighlighted: false },
    { title: "Ma Meilleure Ennemie", artist: "Stromae y Pomme", duration: "2:49", imagen: "/img/ma_meilleure.png", isHighlighted: true },
    { title: "Not like us", artist: "Kendrick Lamar", duration: "4:45", imagen: "/img/not_like_us.png", isHighlighted: false }
  ];

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingText>Cargando resultados...</LoadingText>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <>
        <SongList>
          {staticSongs.map((song, index) => (
            <Song
              key={index}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              imagen={song.imagen}
              isHighlighted={song.isHighlighted}
            />
          ))}
        </SongList>
        <ErrorContainer>
          <ErrorText>Ocurrió un error al buscar los álbumes.</ErrorText>
          <RetryButton onClick={onRetry}>Reintentar</RetryButton>
        </ErrorContainer>
      </>
    );
  }

  if (!albums || albums.length === 0) {
    return (
      <>
        <SongList>
          {staticSongs.map((song, index) => (
            <Song
              key={index}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              imagen={song.imagen}
              isHighlighted={song.isHighlighted}
            />
          ))}
        </SongList>
        <NoResultsContainer>
          <NoResultsText>
            {searchTerm ? (
              `No se encontraron álbumes para "${searchTerm}"`
            ) : (
              'Busca un artista para ver sus álbumes'
            )}
          </NoResultsText>
        </NoResultsContainer>
      </>
    );
  }

  return (
    <>
      <SongList>
        {staticSongs.map((song, index) => (
          <Song
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            imagen={song.imagen}
            isHighlighted={song.isHighlighted}
          />
        ))}
      </SongList>
      
      <SearchResultsContainer>
        <ResultsTitle>Álbumes encontrados ({albums.length})</ResultsTitle>
        <AlbumsGrid>
          {albums.map((album) => {
            const isAdded = isAlbumInLibrary(album.idAlbum);
            
            return (
              <AlbumCard key={album.idAlbum}>
                <AlbumLink to={`/album/${album.idAlbum}`}>
                  <AlbumCover>
                    <AlbumImage 
                      src={album.strAlbumThumb || '/img/default-album.png'} 
                      alt={album.strAlbum}
                      onError={(e) => {
                        e.target.src = '/img/default-album.png';
                      }}
                    />
                  </AlbumCover>
                  <AlbumInfo>
                    <AlbumTitle>{album.strAlbum}</AlbumTitle>
                    <AlbumArtist>{album.strArtist}</AlbumArtist>
                    <AlbumYear>{album.intYearReleased || 'Año desconocido'}</AlbumYear>
                  </AlbumInfo>
                </AlbumLink>
                <AddToLibraryButton 
                  $isAdded={isAdded}
                  onClick={() => !isAdded && onAddToLibrary(album)}
                  disabled={isAdded}
                >
                  {isAdded ? 'Ya en biblioteca' : 'Añadir a biblioteca'}
                </AddToLibraryButton>
              </AlbumCard>
            );
          })}
        </AlbumsGrid>
      </SearchResultsContainer>
    </>
  );
}

export default SearchResults;