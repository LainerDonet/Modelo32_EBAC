// src/components/SongDetail/SongDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../../redux/slices/librarySlice';
import {
  SongDetailContainer,
  BackLink,
  AlbumHeader,
  AlbumCoverLarge,
  AlbumImageLarge,
  AlbumInfoDetailed,
  AlbumTitleLarge,
  ArtistName,
  AlbumMetadata,
  AlbumDescription,
  AlbumActions,
  ActionButton,
  LoadingContainer,
  LoadingText,
  ErrorContainer,
  ErrorText,
  NoResultsContainer
} from './SongDetail.styles';

function SongDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const library = useSelector(state => state.library);
  
  // Estado local para manejar la petición individual del álbum
  const [albumData, setAlbumData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para obtener los detalles del álbum
  useEffect(() => {
    const fetchAlbumDetails = async () => {
      if (!id) return;
      
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`
        );
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setAlbumData(result);
      } catch (err) {
        setError(err.message);
        setAlbumData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumDetails();
  }, [id]);

  const retry = () => {
    if (id) {
      setError(null);
      const fetchAlbumDetails = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`
          );
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          const result = await response.json();
          setAlbumData(result);
        } catch (err) {
          setError(err.message);
          setAlbumData(null);
        } finally {
          setLoading(false);
        }
      };
      fetchAlbumDetails();
    }
  };

  // Función para verificar si el álbum está en la biblioteca
  const isAlbumInLibrary = (albumId) => {
    return library.some(item => item.idAlbum === albumId);
  };

  // Función para agregar a la biblioteca
  const handleAddToLibrary = (album) => {
    if (!isAlbumInLibrary(album.idAlbum)) {
      dispatch(addSong(album));
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingText>Cargando detalles del álbum...</LoadingText>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorText>Error al cargar el álbum: {error}</ErrorText>
        <div>
          <ActionButton 
            as="button" 
            onClick={retry}
            $variant="secondary"
          >
            Reintentar
          </ActionButton>
          <ActionButton 
            href="/"
            $variant="secondary"
          >
            Volver al inicio
          </ActionButton>
        </div>
      </ErrorContainer>
    );
  }

  if (!albumData || !albumData.album || albumData.album.length === 0) {
    return (
      <NoResultsContainer>
        <p>No se encontró información del álbum</p>
        <ActionButton 
          href="/"
          $variant="secondary"
        >
          Volver al inicio
        </ActionButton>
      </NoResultsContainer>
    );
  }

  const album = albumData.album[0];
  const isInLibrary = isAlbumInLibrary(album.idAlbum);

  return (
    <SongDetailContainer>
      <BackLink to="/">Volver a la búsqueda</BackLink>
      
      <AlbumHeader>
        <AlbumCoverLarge>
          <AlbumImageLarge 
            src={album.strAlbumThumb || '/img/default-album.png'} 
            alt={album.strAlbum}
            onError={(e) => {
              e.target.src = '/img/default-album.png';
            }}
          />
        </AlbumCoverLarge>
        <AlbumInfoDetailed>
          <AlbumTitleLarge>{album.strAlbum}</AlbumTitleLarge>
          <ArtistName>{album.strArtist}</ArtistName>
          <AlbumMetadata>
            <p><strong>Año:</strong> {album.intYearReleased || 'Desconocido'}</p>
            <p><strong>Género:</strong> {album.strGenre || 'No especificado'}</p>
            <p><strong>Sello discográfico:</strong> {album.strLabel || 'No especificado'}</p>
            {album.strReleaseFormat && <p><strong>Formato:</strong> {album.strReleaseFormat}</p>}
          </AlbumMetadata>
        </AlbumInfoDetailed>
      </AlbumHeader>

      {album.strDescriptionEN && (
        <AlbumDescription>
          <h3>Descripción</h3>
          <p>{album.strDescriptionEN}</p>
        </AlbumDescription>
      )}

      <AlbumActions>
        <ActionButton 
          as="button"
          onClick={() => handleAddToLibrary(album)}
          $variant={isInLibrary ? "secondary" : "primary"}
          disabled={isInLibrary}
        >
          {isInLibrary ? 'Ya en biblioteca' : 'Añadir a biblioteca'}
        </ActionButton>
        
        <ActionButton 
          href={album.strMusicBrainzID ? `https://musicbrainz.org/release/${album.strMusicBrainzID}` : '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          $variant="primary"
          $disabled={!album.strMusicBrainzID}
        >
          Ver en MusicBrainz
        </ActionButton>
        {album.strAllMusicID && (
          <ActionButton 
            href={`https://www.allmusic.com/album/${album.strAllMusicID}`}
            target="_blank" 
            rel="noopener noreferrer"
            $variant="primary"
          >
            Ver en AllMusic
          </ActionButton>
        )}
      </AlbumActions>
    </SongDetailContainer>
  );
}

export default SongDetail;