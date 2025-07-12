// src/App.js
import React from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // Método del ciclo de vida: se ejecuta una vez montado el componente
    console.log("La aplicación se ha cargado correctamente");
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="song-list">
          <Song title="Heterocomía" artist="Belinda" duration="3:51" imagen="/img/heterocromia.png"/>
          <Song title="Ma Meilleure Ennemie" artist="Stromae y Pomme" duration="2:49" imagen="/img/ma_meilleure.png"/>
          <Song title="Not like us" artist="Kendrick Lamar
" duration="4:45" imagen="/img/not_like_us.png"/>
          {/* Puede agregarse más <Song /> estáticos según se desee */}
        </div>
      </div>
    );
  }
}

export default App;


