import { createGlobalStyle, keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

export const GlobalStyle = createGlobalStyle`
  /*reset*/
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  article, aside, details, figcaption, figure, dialog,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }
  ul, ul li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
    &:before, &:after {
      content: none;
    }
  }
  a {
    text-decoration: none;
    font-size: 100%;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /**
   * Paul Irish box sizing reset so all elements have broder-box.
   */
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
  /**
   * custom smarty resets
   */
  a {
    text-decoration: none;
  }
  button, input, a, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /*global*/
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.colors.black};
  }
  
  .container {
    max-width: 1140px;
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
  }
  
  .main-wrapper {
    padding-top: 64px;
  }

  /*typography*/
  
  h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5 {
    font-weight: 700;
    line-height: 1.2;
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.titleSizes.h1};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  h2, .h2 {
    font-size: ${({ theme }) => theme.titleSizes.h2};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  h3, .h3 {
    font-size: ${({ theme }) => theme.titleSizes.h3};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  h4, .h4 {
    font-size: ${({ theme }) => theme.titleSizes.h4};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  h5, .h5 {
    font-size: ${({ theme }) => theme.titleSizes.h4};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  
  
  
  
  /*animations*/
  .animated {
    opacity: 0;
  }
  .fade-in {
    animation: ${fadeIn} .5s  ease-in forwards;
  }
  
  //iframe {
  //  pointer-events: none;
  //  &[title = 'archetype'] {
  //    pointer-events: none;
  //  }
  //}
  
  
  /*media queries*/
  @media(max-width: ${({ theme }) => theme.breakpoints.md}px) {
    h1, .h1 {
      font-size: ${({ theme }) => theme.titleSizesSM.h1};
    }

    h2, .h2 {
      font-size: ${({ theme }) => theme.titleSizesSM.h2};
    }

    h3, .h3 {
      font-size: ${({ theme }) => theme.titleSizesSM.h3};
    }
  }
  
  @media(max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    h1, .h1 {
      font-size: ${({ theme }) => theme.titleSizesXS.h1};
    }

    h2, .h2 {
      font-size: ${({ theme }) => theme.titleSizesXS.h2};
    }
  }
  
`
