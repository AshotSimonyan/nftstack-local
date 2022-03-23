export const messages = {
  required: "This field is required",
  email: "Wrong email format.",
  success: "Thanks! We’ll get back to you ASAP.",
  error: "Something went wrong.",
}

export const regex = {
  email: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
}

export const required = {
  required: messages.required,
}

export const emailValidate = {
  required: messages.required,
  pattern: {
    value: regex.email,
    message: messages.email,
  },
}
