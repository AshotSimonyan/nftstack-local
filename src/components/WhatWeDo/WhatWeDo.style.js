import styled, { keyframes } from "styled-components"

export const WhatWeDoStyle = styled.section`
  padding: 160px 0;

  .section-title {
    padding-bottom: 32px;
    text-align: center;
  }

  .card-wrapper {
    display: flex;
  }

  .card {
    padding: 48px 24px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    flex: 1;
    transition: 0.3s;

    &:not(:last-child) {
      margin-right: 24px;
    }

    &:hover {
      flex: 1.2;
    }

    ul {
      height: 440px;
      li {
        list-style-type: disc;
        margin-left: 20px;
      }
    }
  }

  .card-title {
    color: ${({ theme }) => theme.colors.primary};
    height: 124px;
    padding-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .card-wrapper {
      flex-direction: column;
    }
    .card {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 24px;
      }
      &:hover {
        flex: 1;
      }
      ul {
        height: auto;
      }
    }
    .card-title {
      height: auto;
    }
  }
`
