import React from "react"
import { LoaderStyle } from "./Loader.style"
import Logo from "../../assets/logo.svg"

const MyComponent = ({ className }) => {
  return (
    <LoaderStyle className={className}>
      <img src={Logo} alt="NFTStack" className="logo" />
      <div className="bar">
        <svg>
          <circle cx="50%" cy="50%" r="50%" />
        </svg>
      </div>
    </LoaderStyle>
  )
}

export default MyComponent
