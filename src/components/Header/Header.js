// src/components/Header/Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  Nav,
  NavLink,
  MainTitle
} from './Header.styles';

function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png" 
          alt="Logo" 
        />
        <Nav>
          <ul>
            <li>
              <NavLink 
                to="/" 
                $isActive={location.pathname === '/'}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/library" 
                $isActive={location.pathname === '/library'}
              >
                Mi Biblioteca
              </NavLink>
            </li>
          </ul>
        </Nav>
      </LogoContainer>
      <MainTitle>Mi reproductor de música</MainTitle>
    </HeaderContainer>
  );
}

export default Header;