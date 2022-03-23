import { forwardRef, useEffect, useMemo, useState } from "react"

import { DrawerSliderStyle, OurWorkStyle } from "./OurWork.style"
import { Button, Carousel, Icon } from "../UIKit"
import { theme } from "../../styles/global/theme"
import { previewList, projImgList, projListDrawer } from "./sliderImages"
import { Title } from "../Animations"
import Drawer from "../Drawer/Drawer"
import { useLockedBody } from "../../hooks/useLockedBody"

const Arrow = ({ className, onClick, direction, size = 24, color }) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon name={`arrow-${direction}`} color={color} size={size} />
    </button>
  )
}

const OurWork = forwardRef(({ onScreen }, ref) => {
  const [animationClass, setAnimationClass] = useState("")
  const [, setLocked] = useLockedBody()
  const [openProjectDrawer, setOpenProjectDrawer] = useState(false)
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [nav3, setNav3] = useState(null)
  let slider1
  let slider2
  let slider3

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
    setNav3(slider3)
  }, [slider1, slider2, slider3])

  const settings = useMemo(() => {
    return {
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 600,
      centerMode: true,
      centerPadding: "20px",
      focusOnSelect: true,
      nextArrow: <Arrow direction={"right"} color={theme.colors.white} />,
      prevArrow: <Arrow direction={"left"} color={theme.colors.white} />,
      responsive: [
        {
          breakpoint: theme.breakpoints.xl,
          settings: {
            slidesToShow: 3,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: theme.breakpoints.md,
          settings: {
            slidesToShow: 1,
            centerPadding: "140px",
          },
        },
        {
          breakpoint: theme.breakpoints.sm,
          settings: {
            slidesToShow: 1,
            centerPadding: "40px",
          },
        },
      ],
    }
  }, [])

  const settingsDrawer = useMemo(() => {
    return {
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      focusOnSelect: false,
      adaptiveHeight: true,
      fade: true,
      nextArrow: (
        <Arrow direction={"right"} size={16} color={theme.colors.black} />
      ),
      prevArrow: (
        <Arrow direction={"left"} size={16} color={theme.colors.black} />
      ),
    }
  }, [])

  const settingsPreview = useMemo(() => {
    return {
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      focusOnSelect: false,
      fade: true,
    }
  }, [])

  const showNextAnimation = () => {
    if (!animationClass) {
      setAnimationClass("fade-in")
    }
  }

  const handleDrawerOpen = () => {
    setLocked(true)
    setOpenProjectDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenProjectDrawer(false)
    setLocked(false)
  }

  return (
    <OurWorkStyle ref={ref} id="works">
      <div className="container">
        <div className="content">
          <h4>Our Works</h4>
          <div className="preview-block">
            <Carousel
              asNavFor={nav1}
              ref={slider => (slider3 = slider)}
              settings={settingsPreview}
              className={`scrollable-content carousel animated ${animationClass}`}
            >
              {previewList.map(({ title, description }, index) => {
                return (
                  <div key={index}>
                    <div onAnimationEnd={showNextAnimation}>
                      <Title as="h2" title={title} startAnim={onScreen} />
                    </div>
                    <div className={`animated ${animationClass}`}>
                      <p>{description}</p>
                      <Button variant="outlined" onClick={handleDrawerOpen}>
                        View Project
                      </Button>
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <Carousel
        settings={settings}
        className={`carousel animated ${animationClass}`}
        asNavFor={nav2}
        ref={slider => (slider1 = slider)}
      >
        {projImgList.map((img, index) => {
          return (
            <div className="item" key={index} onClick={handleDrawerOpen}>
              <img src={img} alt="" />
            </div>
          )
        })}
      </Carousel>

      <Drawer opened={openProjectDrawer} onDrawerClose={handleDrawerClose}>
        <Carousel
          asNavFor={nav3}
          ref={slider => (slider2 = slider)}
          settings={settingsDrawer}
          className={`scrollable-content carousel animated ${animationClass}`}
        >
          {projListDrawer.map(
            (
              {
                title,
                preview,
                description1,
                description2,
                description3,
                socialUrls,
                websiteUrl,
                gallery,
              },
              index
            ) => {
              return (
                <DrawerSliderStyle key={index}>
                  <h3 className="title">{title}</h3>
                  <h4 className="preview">{preview}</h4>
                  <div className="drawer-row">
                    <Button
                      reverse
                      as="a"
                      variant="outlined"
                      href={websiteUrl}
                      target="_blank"
                    >
                      View Website
                    </Button>
                    <ul className="social">
                      <li>
                        <p>Share</p>
                      </li>
                      <li>
                        <a href={socialUrls.instagram}>
                          <Icon name="instagram" />
                        </a>
                      </li>
                      <li>
                        <a href={socialUrls.linkedin}>
                          <Icon name="linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={gallery.img1} alt="" />
                  <p className="description">{description1}</p>
                  <img src={gallery.img2} alt="" />
                  <p className="description">{description2}</p>
                  <div className="img-group">
                    <img src={gallery.img3} alt="" />
                    <img src={gallery.img4} alt="" />
                  </div>
                  {description3 && (
                    <p className="description">{description3}</p>
                  )}
                  <img className="img-margin" src={gallery.img5} alt="" />
                </DrawerSliderStyle>
              )
            }
          )}
        </Carousel>
      </Drawer>
    </OurWorkStyle>
  )
})

export default OurWork
