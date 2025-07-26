// src/components/SearchResults/SearchResults.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoadingContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.secondary};
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
`;

export const ErrorText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const NoResultsContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
`;

export const NoResultsText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const SearchResultsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const ResultsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: 1.5em;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
`;

export const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const AlbumCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:hover {
    transform: translateY(-4px);
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const AlbumLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const AlbumCover = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(255, 0, 0, 0.1) 100%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  ${AlbumCard}:hover &::after {
    opacity: 1;
  }
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.medium};

  ${AlbumCard}:hover & {
    transform: scale(1.05);
  }
`;

export const AlbumInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const AlbumTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-size: 1.1em;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AlbumArtist = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AlbumYear = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.8em;
`;

export const AddToLibraryButton = styled.button`
  background: ${({ theme, $isAdded }) => 
    $isAdded ? theme.colors.neutral.gradient : theme.colors.accent.gradient};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  opacity: ${({ $isAdded }) => $isAdded ? 0.7 : 0};

  ${AlbumCard}:hover & {
    opacity: 1;
  }

  &:hover {
    background: ${({ theme, $isAdded }) => 
      $isAdded ? theme.colors.neutral.gradientHover : theme.colors.accent.gradientHover};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const RetryButton = styled.button`
  background: ${({ theme }) => theme.colors.neutral.gradient};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.gradientHover};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;