// src/components/SongDetail/SongDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
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
  const { data: albumData, loading, error, retry } = useFetch(
    `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`
  );

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