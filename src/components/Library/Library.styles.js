// src/components/Library/Library.styles.js
import styled from 'styled-components';

export const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyLibrary = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  
  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    
    &:last-child {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.text.muted};
    }
  }
  
  svg {
    width: 64px;
    height: 64px;
    color: ${({ theme }) => theme.colors.text.muted};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const LibraryStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

export const StatsText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: 0.9em;
  
  strong {
    color: ${({ theme }) => theme.colors.accent.primary};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  }
`;

export const ClearButton = styled.button`
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: #ff5252;
    transform: scale(1.05);
  }
`;