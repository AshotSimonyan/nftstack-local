import styled from "styled-components"

export const ContactStyle = styled.section`
  padding: 80px 0 200px;

  .content {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .title {
    padding-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 80px 0 160px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 80px 0 120px;
  }
`

export const ContactFormStyle = styled.form`
  .form-input {
    margin-bottom: 24px;
  }

  .button-wrapper {
    padding-top: 32px;
    position: relative;
  }

  .message {
    position: absolute;
    top: 0;
    margin: 0 auto;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.white};
  }
`
