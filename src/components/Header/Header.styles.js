// src/components/Header/Header.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  margin-right: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: center;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: none;
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.accent.primary : theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  text-decoration: none;
  font-size: 16px;
  transition: all ${({ theme }) => theme.transitions.fast};
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.background.tertiary : 'none'};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.accent.primary};
    transform: translateY(-1px);
  }
`;

export const MainTitle = styled.h1`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin: 0;
`;