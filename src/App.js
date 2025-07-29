// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import SongDetail from './components/SongDetail/SongDetail';
import Library from './components/Library/Library';
import { AppContainer, PageTitle } from './styles/App.styles';

function HomePage() {
  // Usar useSelector para acceder al estado de Redux Toolkit
  const library = useSelector(state => state.library);
  const { results, loading, error, searchTerm } = useSelector(state => state.search);

  return (
    <>
      <SearchBar />
      <SearchResults 
        albums={results}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        library={library}
      />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Routes>
            <Route 
              path="/" 
              element={<HomePage />} 
            />
            <Route path="/album/:id" element={<SongDetail />} />
            <Route path="/library" element={
              <>
                <PageTitle>Mi biblioteca</PageTitle>
                <Library />
              </>
            } />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;