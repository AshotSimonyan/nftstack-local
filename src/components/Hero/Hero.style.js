import styled, { css, keyframes } from "styled-components"
import { theme } from "../../styles/global/theme"

const letterAppear = keyframes`

  to {
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);

    opacity: 1;
  }
`

// const nthChild = (start, end, style) => {
//     let str = ""
//     for (let i = start; i < end; i += 1) {
//         str += `&:nth-child(${i + 1}){${style}}`
//     }
//     return str
// }

export const HeroStyle = styled.section`
  padding-top: 160px;

  .content {
    text-align: center;
  }

  .title {
    padding-bottom: 32px;

    p {
      overflow: hidden;
    }
  }

  .text {
    padding-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-top: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-top: 80px;
  }
`
