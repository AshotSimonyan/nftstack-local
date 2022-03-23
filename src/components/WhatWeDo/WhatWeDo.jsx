import { forwardRef, useEffect, useRef, useState } from "react"
import { WhatWeDoStyle } from "./WhatWeDo.style"
import Art1 from "../../assets/what-we-do/art1.png"
import Art1Webp from "../../assets/what-we-do/art1.webp"
import Art2 from "../../assets/what-we-do/art2.png"
import Art2Webp from "../../assets/what-we-do/art2.webp"
import Web from "../../assets/what-we-do/web.png"
import WebWebp from "../../assets/what-we-do/web.webp"
import SmartContract from "../../assets/what-we-do/smart-contract.png"
import SmartContractWebp from "../../assets/what-we-do/smart-contract.webp"
import { Title } from "../Animations"
import { useOnScreen } from "../../hooks/useOnScreen"
import Picture from "./Picture"
import data from "./data"

const WhatWeDo = forwardRef(({ onScreen }, ref) => {
  const [anim, setAnim] = useState("")
  const cardRef = useRef(null)
  const whatWeDoScreen = useOnScreen(cardRef, [0.4, 0.4])

  useEffect(() => {
    if (whatWeDoScreen) {
      setAnim("fade-in")
    }
  }, [whatWeDoScreen])

  return (
    <WhatWeDoStyle ref={ref} id="what-we-do">
      <div className="container">
        <h4 className="section-title">How can we help you?</h4>
        <div ref={cardRef} className={`card-wrapper animated ${anim}`}>
          {data.map(({ title, list }, index) => {
            return (
              <div className="card" key={index}>
                <h2 className="card-title">{title}</h2>
                <ul>
                  {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </WhatWeDoStyle>
  )
})

export default WhatWeDo
