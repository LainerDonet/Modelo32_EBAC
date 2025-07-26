// src/styles/Button.styles.js
import styled, { css } from 'styled-components';

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent.gradient};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.accent.gradientHover};
    }
  `,
  
  secondary: css`
    background: ${({ theme }) => theme.colors.neutral.gradient};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.neutral.gradientHover};
    }
  `,
  
  danger: css`
    background: ${({ theme }) => theme.colors.error};
    
    &:hover:not(:disabled) {
      background: #ff5252;
    }
  `,
  
  outline: css`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.accent.primary};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.accent.primary};
      color: ${({ theme }) => theme.colors.text.primary};
    }
  `
};

const buttonSizes = {
  small: css`
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    font-size: 14px;
  `,
  
  medium: css`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
    font-size: 15px;
  `,
  
  large: css`
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xxl};
    font-size: 16px;
  `
};

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  
  ${({ $variant = 'primary' }) => buttonVariants[$variant]};
  ${({ $size = 'medium' }) => buttonSizes[$size]};
  
  &:hover:not(:disabled) {
    transform: ${({ $noHover }) => $noHover ? 'none' : 'scale(1.05)'};
    box-shadow: ${({ theme, $noHover }) => $noHover ? theme.shadows.sm : theme.shadows.lg};
  }
  
  &:disabled {
    transform: none;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.secondary};
    outline-offset: 2px;
  }
`;

export const IconButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LinkButton = styled(Button).attrs({ as: 'a' })`
  text-decoration: none;
`;

export default Button;