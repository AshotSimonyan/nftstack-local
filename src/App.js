import { useEffect, useState, useRef } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import WhatWeDo from "./components/WhatWeDo/WhatWeDo"
import HaveIdea from "./components/HaveIdea/HaveIdea"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import OurWork from "./components/OurWork/OurWork"
import { useOnScreen } from "./hooks/useOnScreen"
import { Button } from "./components/UIKit"
import Loader from "./components/Loader/Loader"
import { useLockedBody } from "./hooks/useLockedBody"

function App() {
  const [loading, setLoading] = useState(true)
  const [, setLocked] = useLockedBody(true)
  const [scrollTo, setScrollTo] = useState(null)
  const [fixedButton, setFixedButton] = useState(false)
  const heroRef = useRef(null)
  const whatWeDoRef = useRef(null)
  const workRef = useRef(null)
  const haveIdeaRef = useRef(null)
  const contactRef = useRef(null)

  const heroScreen = useOnScreen(heroRef)
  const whatWeDoScreen = useOnScreen(whatWeDoRef, [0.4, 0.4])
  const workScreen = useOnScreen(workRef)
  const contactScreen = useOnScreen(contactRef)
  const haveIdeaScreen = useOnScreen(haveIdeaRef)
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  const refMapping = {
    "#what-we-do": whatWeDoRef,
    "#works": workRef,
    "#contact": contactRef,
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3000)
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setFixedButton(window.pageYOffset > 600)
      })
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setFixedButton(window.pageYOffset > 600)
      })
    }
  }, [])

  useEffect(() => {
    if (scrollTo) {
      refMapping[scrollTo]?.current?.scrollIntoView({
        behavior: "smooth",
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  const handleLinkClick = to => {
    setScrollTo(to)
  }

  return (
    <main>
      <Loader className={loading ? "" : "hide-loader"} />
      <Header onLinkClick={handleLinkClick} />
      <div className="main-wrapper">
        <Hero ref={heroRef} onScreen={heroScreen && !loading} />
        <WhatWeDo ref={whatWeDoRef} onScreen={whatWeDoScreen && !loading} />
        <HaveIdea ref={haveIdeaRef} onScreen={haveIdeaScreen && !loading} />
        <OurWork ref={workRef} onScreen={workScreen && !loading} />
        <Contact ref={contactRef} onScreen={contactScreen && !loading} />
        <Footer />
      </div>

      <Button
        as="a"
        href="https://meetings.hubspot.com/abraham-chuljyan"
        target="_blank"
        fixed
        className={fixedButton ? "fade-in-button" : ""}
      >
        Schedule A Call
      </Button>
    </main>
  )
}

export default App
