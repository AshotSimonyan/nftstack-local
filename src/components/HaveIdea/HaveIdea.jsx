import { HaveIdeaStyle } from "./HaveIdea.style"
import { Button } from "../UIKit"
import { Title } from "../Animations"
import { forwardRef, useState } from "react"

const HaveIdea = forwardRef(({ onScreen }, ref) => {
  const title1 = "Have a project in "
  const title2 = "mind?"
  const [animationClass, setAnimationClass] = useState("")
  const showNextAnimation = () => {
    if (!animationClass) {
      setAnimationClass("fade-in")
    }
  }

  return (
    <HaveIdeaStyle ref={ref}>
      <div className="container">
        <div className="content">
          <div className="title" onAnimationEnd={showNextAnimation}>
            <Title startAnim={onScreen} title={title1} />
            <Title startAnim={onScreen} title={title2} />
          </div>
          <div className={`animated ${animationClass}`}>
            <p className="text">
              Book a meeting with our market specialist to discuss the details
              and help you bring your idea to life.
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
    </HaveIdeaStyle>
  )
})

export default HaveIdea
