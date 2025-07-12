// src/components/Header.js
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png" alt="Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#songs">Canciones</a></li>
            <li><a href="#artists">Artistas</a></li>
            <li><a href="#albums">Álbumes</a></li>
          </ul>
        </nav>
        </div>
        <h1>Mi Biblioteca Musical</h1>
      </header>
    );
  }
}

export default Header;