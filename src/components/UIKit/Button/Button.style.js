import styled, { css } from "styled-components"

export const ButtonStyle = styled.button`
  height: 48px;
  line-height: 44px;
  padding: 0 24px;
  font-weight: 700;
  border-radius: ${({ fixed }) => (fixed ? "30px 30px 0 0" : "60px")};
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      background-color: transparent;
      border: 2px solid
        ${({ theme, reverse }) =>
          reverse ? theme.colors.black : theme.colors.white};
      color: ${({ theme, reverse }) =>
        reverse ? theme.colors.black : theme.colors.white};

      &:hover {
        background-color: ${({ theme, reverse }) =>
          reverse ? theme.colors.black : theme.colors.white};
        color: ${({ theme, reverse }) =>
          reverse ? theme.colors.white : theme.colors.black};
      }
    `}
  
  ${({ fixed }) =>
    fixed &&
    css`
      opacity: 0;
      visibility: hidden;
      position: fixed;
      top: 50%;
      right: 0;
      transform: rotate(-90deg) translate(0%, 64px);
      transform-origin: top;
    `}



  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }
`
