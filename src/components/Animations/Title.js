import React, { useEffect, useState } from "react"
import { TitleStyle } from "./Animations.style"
import { animatedTitle } from "../../utils/utils"

const Title = ({ startAnim, title, withColor, ...props }) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (startAnim) {
      setStart(true)
    }
  }, [startAnim])
  return (
    <TitleStyle
      withColor={withColor}
      letters={title?.length}
      startAnim={start}
      {...props}
    >
      {animatedTitle(title)}
    </TitleStyle>
  )
}

export default Title
