import { ContactFormStyle } from "./Contact.style"
import { Button, Input, Textarea } from "../UIKit"
import { Controller, useForm } from "react-hook-form"
import { emailValidate, required, messages } from "./Validation"
import { useEffect, useState } from "react"

const ContactForm = ({ className }) => {
  const [message, setMessage] = useState("")
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  })

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("")
      }, 5000)
    }
  }, [message])

  const onSubmit = data => {
    let xhr = new XMLHttpRequest()
    let url =
      "https://api.hsforms.com/submissions/v3/integration/submit/21303421/a6bf03e3-10fa-409e-ae74-c7a3f62453a2"
    let dataToSend = {
      fields: [
        {
          name: "email",
          value: data.email,
        },
        {
          name: "firstname",
          value: data.name,
        },
        {
          name: "message",
          value: data.message,
        },
      ],
      context: {
        pageUri: "www.nftstack.info",
        pageName: "NFT Stack",
      },
    }

    let final_data = JSON.stringify(dataToSend)

    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setMessage(messages.success)
        reset()
      } else {
        setMessage(messages.error)
      }
      //  else if (xhr.readyState === 4 && xhr.status === 403) {
      //     setMessage(messages.error)
      // } else if (xhr.readyState === 4 && xhr.status === 404) {
      //     setMessage(messages.error)
      // }
    }

    // Sends the request
    xhr.send(final_data)
  }

  // const onSubmit = async data => {
  //     let url = 'https://api.hsforms.com/submissions/v3/integration/submit/21303421/a6bf03e3-10fa-409e-ae74-c7a3f62453a2'
  //     let dataToSend = {
  //         "fields": [
  //             {
  //                 "name": "email",
  //                 "value": data.email
  //             },
  //             {
  //                 "name": "firstname",
  //                 "value": data.name
  //             },
  //             {
  //                 "name": "message",
  //                 "value": data.message
  //             }
  //         ],
  //         "context": {
  //             "pageUri": "www.nftstack.info",
  //             "pageName": "NFT Stack"
  //         },
  //     }
  //
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(dataToSend)
  //     };
  //
  //     try{
  //         let response = await fetch(url, requestOptions);
  //         await setMessage(messages.success)
  //         reset()
  //     } catch(err){
  //         setMessage(messages.error)
  //     }
  // }

  const hasError = message === messages.error

  return (
    <ContactFormStyle
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      noValidate
      hasError={hasError}
    >
      <Controller
        render={({ field }) => (
          <Input
            value={field.value}
            onChange={field.onChange}
            placeholder="Email*"
            className="form-input"
            errorMessage={errors.email?.message}
          />
        )}
        name="email"
        control={control}
        rules={emailValidate}
      />
      <Controller
        render={({ field }) => (
          <Input
            value={field.value}
            onChange={field.onChange}
            placeholder="Name*"
            className="form-input"
            errorMessage={errors.name?.message}
          />
        )}
        name="name"
        control={control}
        rules={required}
      />
      <Controller
        render={({ field }) => (
          <Textarea
            value={field.value}
            onChange={field.onChange}
            placeholder="Message"
            className="form-input"
          />
        )}
        name="message"
        control={control}
      />
      <div className="button-wrapper">
        {message && <p className="message">{message}</p>}
        <Button type="submit">Submit</Button>
      </div>
    </ContactFormStyle>
  )
}

export default ContactForm
