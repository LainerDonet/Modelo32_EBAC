// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchButton
} from './SearchBar.styles';

function SearchBar({ onSearch, loading }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
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