import styled from "styled-components"

export const HaveIdeaStyle = styled.section`
  padding: 160px 0;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;

  .content {
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
  }

  .title {
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 32px;
  }

  h1 {
  }

  .text {
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 120px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 80px 0;
  }
`
