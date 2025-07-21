// src/components/SongDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function SongDetail() {
  const { id } = useParams();
  const { data: albumData, loading, error, retry } = useFetch(
    `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`
  );

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Cargando detalles del álbum...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">Error al cargar el álbum: {error}</p>
        <button className="ytmusic-btn retry-btn" onClick={retry}>
          Reintentar
        </button>
        <Link to="/" className="ytmusic-btn back-btn">
          Volver al inicio
        </Link>
      </div>
    );
  }

  if (!albumData || !albumData.album || albumData.album.length === 0) {
    return (
      <div className="no-results">
        <p>No se encontró información del álbum</p>
        <Link to="/" className="ytmusic-btn back-btn">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const album = albumData.album[0];

  return (
    <div className="song-detail">
      <Link to="/" className="back-link">← Volver a la búsqueda</Link>
      
      <div className="album-header">
        <div className="album-cover-large">
          <img 
            src={album.strAlbumThumb || '/img/default-album.png'} 
            alt={album.strAlbum}
            className="album-image-large"
            onError={(e) => {
              e.target.src = '/img/default-album.png';
            }}
          />
        </div>
        <div className="album-info-detailed">
          <h1 className="album-title-large">{album.strAlbum}</h1>
          <h2 className="artist-name">{album.strArtist}</h2>
          <div className="album-metadata">
            <p><strong>Año:</strong> {album.intYearReleased || 'Desconocido'}</p>
            <p><strong>Género:</strong> {album.strGenre || 'No especificado'}</p>
            <p><strong>Sello discográfico:</strong> {album.strLabel || 'No especificado'}</p>
            {album.strReleaseFormat && <p><strong>Formato:</strong> {album.strReleaseFormat}</p>}
          </div>
        </div>
      </div>

      {album.strDescriptionEN && (
        <div className="album-description">
          <h3>Descripción</h3>
          <p>{album.strDescriptionEN}</p>
        </div>
      )}

      <div className="album-actions">
        <a 
          href={album.strMusicBrainzID ? `https://musicbrainz.org/release/${album.strMusicBrainzID}` : '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ytmusic-btn"
          style={{ opacity: album.strMusicBrainzID ? 1 : 0.5 }}
        >
          Ver en MusicBrainz
        </a>
        {album.strAllMusicID && (
          <a 
            href={`https://www.allmusic.com/album/${album.strAllMusicID}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="ytmusic-btn"
          >
            Ver en AllMusic
          </a>
        )}
      </div>
    </div>
  );
}

export default SongDetail;