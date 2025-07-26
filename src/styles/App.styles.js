// src/styles/App.styles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const PageTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2em;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;