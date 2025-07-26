// src/components/SearchBar/SearchBar.styles.js
import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 250px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: none;
  background: ${({ theme, disabled }) => 
    disabled ? theme.colors.background.card : theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'text'};

  &:focus {
    background: ${({ theme, disabled }) => 
      disabled ? theme.colors.background.card : theme.colors.background.hover};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: unset;
  }
`;

export const SearchButton = styled.button`
  background: ${({ theme, disabled }) => 
    disabled ? theme.colors.neutral.primary : theme.colors.accent.gradient};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  margin: ${({ theme }) => theme.spacing.xs};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  display: inline-block;
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent.gradientHover};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:disabled {
    transform: none;
  }
`;