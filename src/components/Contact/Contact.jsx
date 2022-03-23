import { ContactStyle } from "./Contact.style"
import ContactForm from "./ContactForm"
import { forwardRef, useEffect, useState } from "react"
import { Title } from "../Animations"

const Contact = forwardRef(({ onScreen }, ref) => {
  const [animationClass, setAnimationClass] = useState("")

  const showNextAnimation = () => {
    if (!animationClass) {
      setAnimationClass("fade-in")
    }
  }

  return (
    <ContactStyle ref={ref} id="contact">
      <div className="container">
        <div className="content" onAnimationEnd={showNextAnimation}>
          <div className="title">
            <Title startAnim={onScreen} title={"Get in touch"} />
          </div>
          <ContactForm className={`animated ${animationClass}`} />
        </div>
      </div>
    </ContactStyle>
  )
})

export default Contact
