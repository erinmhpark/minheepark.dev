"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    //logic to send message via email
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      {formSubmitted ? (
        <div>
          Thanks for the message {name}, will be in touch with you soon!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full rounded-md pl-2"
              onChange={handleNameChange}
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Example@email.com"
              className="w-full rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Message:</label>
            <textarea
              rows={6}
              cols={50}
              name="message"
              id="message"
              placeholder="Say hello!"
              className="w-full rounded-md p-1"
            />
          </div>
          <button className="w-fit self-center rounded-md border p-2">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
