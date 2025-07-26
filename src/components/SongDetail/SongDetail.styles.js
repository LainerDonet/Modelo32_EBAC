// src/components/SongDetail/SongDetail.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SongDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent.primary};
  text-decoration: none;
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.secondary};
    transform: translateX(-5px);
  }

  &::before {
    content: '←';
    margin-right: ${({ theme }) => theme.spacing.sm};
    font-size: 1.2em;
  }
`;

export const AlbumHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const AlbumCoverLarge = styled.div`
  flex-shrink: 0;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 60%,
      rgba(255, 0, 0, 0.2) 100%
    );
    pointer-events: none;
  }
`;

export const AlbumImageLarge = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
  }
`;

export const AlbumInfoDetailed = styled.div`
  flex: 1;
  min-width: 0;
`;

export const AlbumTitleLarge = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-size: 2.5em;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2em;
  }
`;

export const ArtistName = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.accent.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.normal};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.secondary};
  }
`;

export const AlbumMetadata = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: 0.95em;
    
    strong {
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    }
  }
`;

export const AlbumDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 1.3em;
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  }
  
  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: 1em;
  }
`;

export const AlbumActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const ActionButton = styled.a`
  background: ${({ theme, $variant }) => 
    $variant === 'primary' ? theme.colors.accent.gradient : theme.colors.neutral.gradient};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  display: inline-block;
  opacity: ${({ $disabled }) => $disabled ? 0.5 : 1};

  &:hover:not([disabled]) {
    background: ${({ theme, $variant }) => 
      $variant === 'primary' ? theme.colors.accent.gradientHover : theme.colors.neutral.gradientHover};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

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
  
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;