import { useEffect, useState } from "react"

const Picture = ({ src, srcSet, alt, classname = "", startAnim }) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (startAnim) {
      setStart(true)
    }
  }, [startAnim])
  return (
    <div className={`img ${classname} ${start ? "animate" : ""}`}>
      <picture>
        <source srcSet={srcSet} type="image/webp" />
        <img src={src} alt={alt} />
      </picture>
    </div>
  )
}

export default Picture
