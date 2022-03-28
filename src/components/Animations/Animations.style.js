import styled, { css, keyframes } from "styled-components"

const letterAppear = keyframes`
  to {
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);

    opacity: 1;
  }
`

const template = i => {
  return `
      &:nth-child(${i + 1}) {
        animation-delay: ${`${11 * i}ms`};
       }
    `
}

const getAnimations = items => {
  let str = ""
  for (let i = 0; i < items; i += 1) {
    str += template(i)
  }
  return str
}

export const TitleStyle = styled.h1`
  opacity: 0;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;

  ${({ startAnim, letters }) =>
    startAnim &&
    css`
      opacity: 1;

      span {
        transform: translate3d(0px, 110%, 0px) scale3d(1, 1, 1) rotateX(180deg)
          rotateY(0deg) rotateZ(20deg) skew(0deg, 0deg);
        display: inline-block;
        opacity: 0;
        transform-style: preserve-3d;
        animation: ${letterAppear} 1s 0s ease-in-out forwards;

        ${getAnimations(letters)}
        &.space {
          width: 12px;
        }

        ${({ withColor }) =>
          withColor &&
          css`
            color: ${({ theme }) => theme.colors.primary};
          `}
      }
    `}
`
