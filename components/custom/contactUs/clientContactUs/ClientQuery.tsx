"use client"

import { useState } from "react"

const ClientQuery = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = () => {}

  return (
    <div className="w-full space-y-1 px-2 pt-6 md:space-y-2 md:p-4 md:pt-8 lg:p-6 lg:pt-12">
      <h3 className="text-center text-lg md:text-xl">
        Have any other questions?
      </h3>

      <p className="mx-auto w-full text-center text-xs text-primary-background/80 md:w-2/3 md:text-sm lg:w-1/2">
        Don’t hesitate to send us an email with your enquiry or statement at
      </p>

      <div className="mx-auto mt-6 flex w-full max-w-lg items-center md:w-2/3 lg:w-1/2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit()
          }}
          placeholder="What's on Your Mind?"
          className="w-full min-w-0 rounded-l-md bg-primary-background/5 p-1 text-primary-background/80 transition outline-none placeholder:text-primary-background/60 focus:ring-1 focus:ring-primary-background/20 md:p-2 lg:p-2"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="shrink-0 rounded-r-md bg-primary-background p-1 font-medium text-primary-white transition-all duration-200 hover:bg-primary-background/80 active:scale-95 active:brightness-90 lg:p-2"
        >
          Send Us
        </button>
      </div>
    </div>
  )
}

export default ClientQuery
