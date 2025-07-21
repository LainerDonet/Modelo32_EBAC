// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SongDetail from './components/SongDetail';
import Library from './components/Library';
import useFetch from './hooks/useFetch';
import './App.css';

function HomePage() {
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
      />
    </>
  );
}

function App() {
  // Biblioteca personal (mantener funcionalidad existente)
  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    setLibrary((prevLibrary) => [...prevLibrary, song]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album/:id" element={<SongDetail />} />
          <Route path="/library" element={
            <>
              <h2>Mi biblioteca</h2>
              <Library songs={library} />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;