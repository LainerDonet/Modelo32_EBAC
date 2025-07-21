// src/components/SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';
import Song from './Song';

function SearchResults({ albums, loading, error, onRetry, searchTerm }) {
  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Cargando resultados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">Error: {error}</p>
        <button className="ytmusic-btn retry-btn" onClick={onRetry}>
          Reintentar
        </button>
      </div>
    );
  }

  if (!albums || albums.length === 0) {
    return (
      <div className="no-results">
        {searchTerm ? (
          <p>No se encontraron álbumes para "{searchTerm}"</p>
        ) : (
          <p>Busca un artista para ver sus álbumes</p>
        )}
      </div>
    );
  }

  return (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;