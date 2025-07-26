// src/components/SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';
import Song from './Song';
import '../App.css';

function SearchResults({ albums, loading, error, onRetry, searchTerm, onAddToLibrary }) {
  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Cargando resultados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <>
       <div className="App">
        

        <div className="song-list">
          <Song title="Heterocomía" artist="Belinda" duration="3:51" imagen="/img/heterocromia.png"/>
          <Song title="Ma Meilleure Ennemie" artist="Stromae y Pomme" duration="2:49" imagen="/img/ma_meilleure.png"/>
          <Song title="Not like us" artist="Kendrick Lamar
" duration="4:45" imagen="/img/not_like_us.png"/>
          {/* Puede agregarse más <Song /> estáticos según se desee */}
        </div>
      </div>
    <div>
      {error && (
        <div>
          <p>Ocurrió un error al buscar los álbumes.</p>
          <button onClick={onRetry}>Reintentar</button>
        </div>
      )}
      {albums.map((album) => (
        <div key={album.idAlbum}>
          <h3>{album.strAlbum}</h3>
          {/* Otros detalles del álbum */}
          <button className='ytmusic-btn' onClick={() => onAddToLibrary(album)}>
            Añadir a biblioteca
          </button>
        </div>
      ))}
    </div>
    </>
  );
  }

  if (!albums || albums.length === 0) {
    return (
      <>
       <div className="App">
        <div className="song-list">
          <Song title="Heterocomía" artist="Belinda" duration="3:51" imagen="/img/heterocromia.png"/>
          <Song title="Ma Meilleure Ennemie" artist="Stromae y Pomme" duration="2:49" imagen="/img/ma_meilleure.png"/>
          <Song title="Not like us" artist="Kendrick Lamar
" duration="4:45" imagen="/img/not_like_us.png"/>
          {/* Puede agregarse más <Song /> estáticos según se desee */}
        </div>
      </div>
      <div className="no-results">
        {searchTerm ? (
          <p>No se encontraron álbumes para "{searchTerm}"</p>
        ) : (
          <p>Busca un artista para ver sus álbumes</p>
        )}
      </div>
      </>
    );
  }

  return (
    <>
     <div className="App">

        <div className="song-list">
          <Song title="Heterocomía" artist="Belinda" duration="3:51" imagen="/img/heterocromia.png"/>
          <Song title="Ma Meilleure Ennemie" artist="Stromae y Pomme" duration="2:49" imagen="/img/ma_meilleure.png"/>
          <Song title="Not like us" artist="Kendrick Lamar
" duration="4:45" imagen="/img/not_like_us.png"/>
          {/* Puede agregarse más <Song /> estáticos según se desee */}
        </div>
      </div>
    <div className="search-results">
      <h2>Álbumes encontrados ({albums.length})</h2>
      <div className="albums-grid">
        {albums.map((album) => (
          <div key={album.idAlbum} className="album-card">
            <Link to={`/album/${album.idAlbum}`} className="album-link">
              <div className="album-cover">
                <img 
                  src={album.strAlbumThumb || '/img/default-album.png'} 
                  alt={album.strAlbum}
                  className="album-image"
                  onError={(e) => {
                    e.target.src = '/img/default-album.png';
                  }}
                />
              </div>
              <div className="album-info">
                <h3 className="album-title">{album.strAlbum}</h3>
                <p className="album-artist">{album.strArtist}</p>
                <p className="album-year">{album.intYearReleased || 'Año desconocido'}</p>
              </div>
            </Link>
            <button className="ytmusic-btn" onClick={() => onAddToLibrary(album)}>
              Añadir a biblioteca
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default SearchResults;