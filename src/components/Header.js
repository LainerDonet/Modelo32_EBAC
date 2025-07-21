// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className='header'>
      <div className="logo-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png" 
          alt="Logo" 
          className="logo" 
        />
        <nav className="nav">
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/library" 
                className={location.pathname === '/library' ? 'active' : ''}
              >
                Mi Biblioteca
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Mi reproductor de música</h1>
    </header>
  );
}

export default Header;
