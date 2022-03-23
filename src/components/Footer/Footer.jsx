import { FooterStyle } from "./Footer.style"

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <p className="copyright">© NFTSTACK {new Date().getFullYear()}</p>
      </div>
    </FooterStyle>
  )
}

export default Footer
