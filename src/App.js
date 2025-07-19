// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import './App.css';

function App() {
  // Datos ficticios para resultados de búsqueda
  const initialSongs = [
    {
      title: "Heterocomía",
      artist: "Belinda",
      duration: "3:51",
      imagen: "/img/heterocromia.png"
    },
    {
      title: "Ma Meilleure Ennemie",
      artist: "Stromae y Pomme",
      duration: "2:49",
      imagen: "/img/ma_meilleure.png"
    },
    {
      title: "Not like us",
      artist: "Kendrick Lamar",
      duration: "4:45",
      imagen: "/img/not_like_us.png"
    }
  ];

  const [searchResults, setSearchResults] = useState(initialSongs);
  const [searchTerm, setSearchTerm] = useState("");
  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    setLibrary((prevLibrary) => [...prevLibrary, song]);
  };

  useEffect(() => {
    console.log("La aplicación se ha cargado correctamente");
  }, []);

  useEffect(() => {
    console.log("La biblioteca se ha actualizado:", library);
  }, [library]);

  // Filtrar canciones por título
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setSearchResults(
      initialSongs.filter(song =>
        song.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar canción..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <h2>Resultados de búsqueda</h2>
      <SearchResults songs={searchResults} onAddToLibrary={addToLibrary} />
      <h2>Mi biblioteca</h2>
      <Library songs={library} />
    </div>
  );
}

export default App;

