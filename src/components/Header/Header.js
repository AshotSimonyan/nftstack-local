import { useEffect, useState } from "react"
import { HeaderStyle } from "./Header.style"
import Logo from "../../assets/logo.svg"
import { Icon } from "../UIKit"
import { theme } from "../../styles/global/theme"
import { useLockedBody } from "../../hooks/useLockedBody"
import { navList } from "./config"

const Header = ({ onLinkClick }) => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [locked, setLocked] = useLockedBody()

  useEffect(() => {
    if (drawerOpened) {
      document.body.classList.add("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [drawerOpened])

  const handleDrawerToggle = () => {
    setDrawerOpened(!drawerOpened)
    setLocked(!locked)
  }

  const handleMenuLinkClick = to => {
    if (drawerOpened) {
      setDrawerOpened(false)
      setLocked(false)
    }
    onLinkClick(to)
  }
  return (
    <HeaderStyle className={drawerOpened ? "open" : ""}>
      <div className="container">
        <div className="header-content">
          <a className="logo" href={"#"}>
            <img src={Logo} alt="NFTStack" />
          </a>
          <button
            className="hamburger"
            type="button"
            onClick={handleDrawerToggle}
          >
            <Icon
              name={drawerOpened ? "close" : "menu"}
              size={32}
              color={theme.colors.white}
            />
          </button>
          <nav className="header-nav">
            <div className="header-nav-inner">
              <ul className="header-nav-list">
                {navList.map(({ to, title }) => {
                  return (
                    <li key={to} onClick={() => handleMenuLinkClick(to)}>
                      {title}
                    </li>
                  )
                })}
              </ul>
              <p className="copyright">© NFTSTACK {new Date().getFullYear()}</p>
            </div>
          </nav>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
