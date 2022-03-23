import styled, { keyframes } from "styled-components"

const barAnimation = keyframes`
  0% {
    stroke-dashoffset: 630px;
  }
  100% {
    stroke-dashoffset: calc(630px - (630px * 90) / 100);
  }
`

export const LoaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.black};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  transition: .5s;

  &.hide-loader {
    opacity: 0;
    visibility: hidden;
  }

  .bar {
    display: inline-block;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    position: relative;
    //box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);
    overflow: hidden;
    margin: 50px;
    animation: ${barAnimation} 3s ease-in-out forwards;
  }

  svg {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotate(-90deg);
  }

  svg circle {
    position: absolute;
    transform: scale(0.939);
    transform-origin: center;
    fill: none;
    stroke: ${({ theme }) => theme.colors.white};
    stroke-width: 2px;
    stroke-dasharray: 630px;
    /* stroke-dashoffset: 630px; */
  }
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

`
