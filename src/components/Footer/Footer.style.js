import styled from "styled-components"

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.md};
`
