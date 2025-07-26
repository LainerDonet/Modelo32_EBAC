// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import SongDetail from './components/SongDetail/SongDetail';
import Library from './components/Library/Library';
import useFetch from './hooks/useFetch';
import { AppContainer, PageTitle } from './styles/App.styles';

function HomePage({ onAddToLibrary, library }) {
  const [artist, setArtist] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  
  const { data, loading, error, retry } = useFetch(searchUrl);

  const handleSearch = (artistName) => {
    setArtist(artistName);
    setSearchUrl(`https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(artistName)}`);
  };

  const albums = data?.album || [];

  return (
    <>
      <SearchBar onSearch={handleSearch} loading={loading} />
      <SearchResults 
        albums={albums}
        loading={loading}
        error={error}
        onRetry={retry}
        searchTerm={artist}
        onAddToLibrary={onAddToLibrary}
        library={library}
      />
    </>
  );
}

function App() {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (album) => {
    // Verificar si el álbum ya está en la biblioteca
    const isAlreadyAdded = library.some(item => item.idAlbum === album.idAlbum);
    if (!isAlreadyAdded) {
      setLibrary((prevLibrary) => [...prevLibrary, album]);
    }
  };

  const clearLibrary = () => {
    setLibrary([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onAddToLibrary={addToLibrary} library={library} />} 
            />
            <Route path="/album/:id" element={<SongDetail />} />
            <Route path="/library" element={
              <>
                <PageTitle>Mi biblioteca</PageTitle>
                <Library albums={library} onClearLibrary={clearLibrary} />
              </>
            } />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;