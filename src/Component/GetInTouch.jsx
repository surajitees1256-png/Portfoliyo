import React, { useState } from "react";

export default function GetInTouch() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [msg, setMsg] = useState("");

  function handle(e) {
    e.preventDefault();

    if (!name || !email || !msg) {
      alert("Please fill all details!");
      return;
    }

    alert("Message sent successfully!");

    console.log(`Email: ${email}`);
    console.log(`Name: ${name}`);
    console.log(`Message: ${msg}`);

    setName("");
    setEmail("");
    setMsg("");
  }

  return (
    <>
      <form
        onSubmit={handle}
        className="w-full flex justify-center mt-10 px-4"
      >
        <div className="w-full max-w-xl p-6 space-y-4 rounded-xl shadow-lg bg-white">

          {/* Titles */}
          <p className="font-light text-center text-gray-600">
            Connect with me
          </p>

          <p className="font-bold text-4xl text-center">
            Get in touch
          </p>

          <p className="font-light text-center text-gray-500 text-sm sm:text-lg">
            I'd love to hear from you! If you have any questions, comments, or feedback,
            please use the form below.
          </p>

          {/* Input Fields */}
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message Area */}
          <textarea
            className="border p-3 w-full h-40 resize-none rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Your message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
            >
              Send Message →
            </button>
          </div>
          
        </div>
      </form>
    </>
  );
}
