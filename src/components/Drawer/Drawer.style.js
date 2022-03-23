import styled, { css } from "styled-components"

export const DrawerStyle = styled.aside`
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  transform: translateX(100%);
  max-width: 880px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 100px 0 80px 40px;
  border-radius: 40px 0 0 40px;
  transition: .5s;
  opacity: 0;

  ${({ opened }) =>
    opened &&
    css`
      opacity: 1;
      transform: translateX(0);

      &:before {
        position: absolute;
      }
    `}
  .scrollable-content {
    height: 100%;

    .slick-slider {
      height: 100%;
      overflow: auto;
      position: static;
    }

    .slick-list {
      .slick-slide {
        padding: 0 40px 0 0;
      }
    }

  }


  .carousel {
    .slick-arrow {
      border-color: ${({ theme }) => theme.colors.black};
      width: 32px;
      height: 32px;
      transition: .3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};

        svg {
          path {
            fill: ${({ theme }) => theme.colors.white} !important;
          }
        }
      }
    }

    .slick-prev, .slick-next {
      &:after {
        position: absolute;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.black};
        height: 100%;
        line-height: 28px;
      }
    }

    .slick-prev {
      left: 80px;
      bottom: 20px;
      top: initial;

      &:after {
        content: 'PREV';
        left: 100%;
        padding-left: 12px;
      }
    }


    .slick-next {
      right: 80px;
      top: inherit;
      bottom: 20px;

      &:after {
        content: 'NEXT';
        right: 100%;
        padding-right: 12px;
      }
    }
  }


}

.btn-close {
  position: absolute;
  top: 40px;
  left: 40px;
  height: 32px;
  line-height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.white} !important;
      }
    }
  }
}

@media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
  .carousel {
    .slick-list {
      .slick-slide {
        padding: 0 24px 0 0;
      }
    }
  }
}

@media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
  max-width: 512px;
  padding: 90px 0 80px 24px;

  .btn-close {
    left: 24px;
  }
}

@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
  max-width: 100%;
  border-radius: 0;
}

`

export const DrawerWrapperStyle = styled.div`
  .overlay {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    ${({ opened }) =>
      opened &&
      css`
        opacity: 1;
        visibility: visible;
      `}
  }

  .carousel {
    .slick-slide {
      &:not(.slick-active) {
        pointer-events: none;
      }
    }
  }
`
