import * as React from "react"
import { ButtonStyle } from "./Button.style"

export const Button = ({
  type = "button",
  className,
  children,
  variant = "primary",
  onClick,
  disabled,
  fixed,
  reverse,
  ...props
}) => {
  return (
    <ButtonStyle
      variant={variant}
      fixed={fixed}
      onClick={onClick}
      className={className}
      disabled={disabled}
      type={type}
      reverse={reverse}
      {...props}
    >
      {children}
    </ButtonStyle>
  )
}
