import styled from "styled-components"

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  &.sticky {
    transition: box-shadow 0.3s;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
  }

  .container,
  .header-content {
    height: 100%;
  }

  .hamburger {
    display: none;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-width: 132px;

    img {
      width: 100%;
      display: block;
    }
  }

  .header-nav {
    .header-nav-inner {
      display: flex;
      align-items: center;
    }

    .header-nav-list {
      display: flex;

      > li {
        cursor: pointer;
        font-weight: 700;
        font-family: ${({ theme }) => theme.fonts.secondary};
        line-height: 1;
        padding-right: 24px;
        &:last-child {
          padding-right: 0;
        }
      }
    }

    .copyright {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .hamburger {
      display: inline-block;
      cursor: pointer;
    }

    &.open {
      .header-nav {
        height: calc(100% - 64px);
      }
    }

    .header-nav {
      position: fixed;
      top: 64px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      z-index: 100;
      height: 0;
      transition: height 0.5s;
      background-color: ${({ theme }) => theme.colors.black};

      .header-nav-inner {
        flex-direction: column;
        align-items: inherit;
        justify-content: space-between;
        height: calc(100vh - 64px);
        padding-top: 120px;
      }

      .header-nav-list {
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;

        > li {
          padding-bottom: 24px;
          padding-right: 0;
          font-size: ${({ theme }) => theme.titleSizes.h1};
          width: 100%;
          border-bottom: 1px solid ${({ theme }) => theme.colors.white};

          &:not(:first-child) {
            padding-top: 40px;
          }
        }
      }

      .copyright {
        display: block;
        text-align: center;
        padding: 24px 20px;
        font-size: ${({ theme }) => theme.fontSizes.md};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .header-nav {
      .header-nav-inner {
        padding-top: 100px;
      }
      .header-nav-list {
        > li {
          padding-bottom: 24px;
          font-size: ${({ theme }) => theme.titleSizes.h2};
          &:not(:first-child) {
            padding-top: 24px;
          }
        }
      }
    }
  }
`
