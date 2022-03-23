import styled from "styled-components"

export const OurWorkStyle = styled.section`
  padding: 120px 0;

  .content {
    max-width: 600px;
    width: 100%;
    padding-bottom: 40px;

    h4 {
      padding-bottom: 80px;
    }

    h2 {
      &:last-of-type {
        margin-bottom: 24px;
      }
    }

    p {
      padding-bottom: 32px;
    }
  }

  .carousel {
    .slick-arrow {
      position: absolute;
      top: 100%;
      height: 48px;
      width: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.white};
      margin-top: 24px;
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.white};

        svg {
          path {
            fill: ${({ theme }) => theme.colors.black} !important;
          }
        }
      }
      &:before {
        content: "";
      }
    }
    .slick-prev {
      left: 50%;
      transform: translateX(calc(-100% - 12px));
    }
    .slick-next {
      right: 50%;
      transform: translateX(calc(100% + 12px));
    }

    .slick-slider {
    }
    .slick-slide {
      padding: 0 40px;
      transition: 0.3s;
      width: 400px;
      .item {
        cursor: pointer;
        display: block;
        margin: 30px 0;
        overflow: hidden;
        border-radius: 20px;

        img {
          width: 100%;
          border-radius: 20px;
          transform: scale(1.3);
          transition: 0.8s;
        }
      }
    }

    .slick-center {
      transform: scale(1.15);

      .item {
        img {
          transform: scale(1);
        }
      }
    }
  }

  .preview-block {
    .carousel {
      .slick-slide {
        padding: 0;

        &:not(.slick-active) {
          pointer-events: none;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    .carousel {
      .slick-slide {
        padding: 0 24px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 80px 0;

    .content {
      h4 {
        padding-bottom: 60px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .carousel {
      .slick-slide {
        padding: 0 30px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .content {
      h4 {
        padding-bottom: 40px;
      }
    }

    .carousel {
      .slick-slide {
        padding: 0 20px;
      }
    }
  }
`

export const DrawerSliderStyle = styled.div`
  color: ${({ theme }) => theme.colors.black};

  .title {
    margin-bottom: 24px;
  }

  .preview {
    margin-bottom: 36px;
  }

  .drawer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .social {
    display: flex;

    li {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  .description {
    padding: 40px 0;
  }

  .img-group {
    display: flex;

    img {
      &:first-child {
        margin-right: 24px;
      }
    }
  }

  .img-margin {
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .drawer-row {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .social {
      margin-bottom: 24px;
    }
    .img-group {
      flex-direction: column;

      img {
        &:first-child {
          margin-right: 0;
          margin-bottom: 24px;
        }
      }
    }
  }
`
