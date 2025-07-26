// src/components/Song/Song.styles.js
import styled from 'styled-components';

export const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, $isHighlighted }) => 
    $isHighlighted ? theme.colors.background.tertiary : theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  border: ${({ theme, $isHighlighted }) => 
    $isHighlighted ? `2px solid ${theme.colors.accent.primary}` : '2px solid transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const SongInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SongImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  object-fit: cover;
  margin-right: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform ${({ theme }) => theme.transitions.fast};

  ${SongContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongTitle = styled.h2`
  margin: 0;
  font-size: 1.1em;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme, $isHighlighted }) => 
    $isHighlighted ? theme.colors.accent.secondary : theme.colors.text.primary};
  transition: color ${({ theme }) => theme.transitions.fast};
`;

export const SongArtist = styled.p`
  margin: 3px 0 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9em;
`;

export const SongDuration = styled.div`
  color: ${({ theme, $isHighlighted }) => 
    $isHighlighted ? theme.colors.accent.secondary : theme.colors.text.tertiary};
  font-size: 0.9em;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: color ${({ theme }) => theme.transitions.fast};
`;