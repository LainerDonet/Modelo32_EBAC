// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../../redux/slices/searchSlice';
import {
  SearchForm,
  SearchInput,
  SearchButton
} from './SearchBar.styles';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  
  // Obtener el estado de loading desde Redux
  const loading = useSelector(state => state.search.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Despachar la acción asíncrona fetchSongs
      dispatch(fetchSongs(searchTerm.trim()));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Buscar artista..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
      />
      <SearchButton 
        type="submit" 
        disabled={loading || !searchTerm.trim()}
      >
        {loading ? 'Buscando...' : 'Buscar'}
      </SearchButton>
    </SearchForm>
  );
}

export default SearchBar;