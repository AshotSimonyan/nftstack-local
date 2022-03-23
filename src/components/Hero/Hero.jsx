import { HeroStyle } from "./Hero.style"
import { Button } from "../UIKit"
import { forwardRef, useEffect, useState } from "react"
import { Title } from "../Animations"

const Hero = forwardRef(({ onScreen }, ref) => {
  const [animationClass, setAnimationClass] = useState("")
  // const title1 = "Full-Stack NFT Artwork"
  // const title2 = "and Development Agency"
  const title1 = "Full-Stack "
  const title2 = "NFT "
  const title3 = "Artwork "
  const title4 = "and "
  const title5 = "Development "
  const title6 = "Agency "

  const showNextAnimation = () => {
    if (!animationClass) {
      setAnimationClass("fade-in")
    }
  }

  return (
    <HeroStyle ref={ref}>
      <div className="container">
        <div className="content">
          <div className="title" onAnimationEnd={showNextAnimation}>
            <Title startAnim={onScreen} title={title1} />
            <Title startAnim={onScreen} title={title2} withColor />
            <Title startAnim={onScreen} title={title3} withColor />
            <Title startAnim={onScreen} title={title4} />
            <Title startAnim={onScreen} title={title5} withColor />
            <Title startAnim={onScreen} title={title6} />
          </div>
          <div className={`animated ${animationClass}`}>
            <p className="text">
              Our aim is to help creators worldwide enter the NFT market as
              smooth as possible.
            </p>
            <Button
              as="a"
              href="https://meetings.hubspot.com/abraham-chuljyan"
              target="_blank"
            >
              Schedule A Call
            </Button>
          </div>
        </div>
      </div>
    </HeroStyle>
  )
})

export default Hero
