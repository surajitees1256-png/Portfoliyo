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
    <div className="w-full flex justify-center mt-16 px-4" id="contact">
      <form
        onSubmit={handle}
        className="w-full max-w-xl p-8 space-y-5 rounded-2xl shadow-xl 
        bg-white dark:bg-gray-900 dark:text-white transition"
      >
        {/* Titles */}
        <p className="font-light text-center text-gray-600 dark:text-gray-300">
          Connect with me
        </p>

        <p className="font-bold text-4xl text-center text-gray-800 dark:text-white">
          Get in touch
        </p>

        <p className="font-light text-center text-gray-500 dark:text-gray-400 text-sm sm:text-lg">
          I'd love to hear from you! If you have any questions or feedback,
          feel free to use the form below.
        </p>

        {/* Input Fields */}
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            className="border dark:border-gray-600 bg-gray-50 dark:bg-gray-800 
            p-3 w-full rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-indigo-600 dark:focus:ring-yellow-400"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="border dark:border-gray-600 bg-gray-50 dark:bg-gray-800 
            p-3 w-full rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-indigo-600 dark:focus:ring-yellow-400"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Message Area */}
        <textarea
          className="border dark:border-gray-600 bg-gray-50 dark:bg-gray-800 
          p-3 w-full h-40 resize-none rounded-lg focus:outline-none 
          focus:ring-2 focus:ring-indigo-600 dark:focus:ring-yellow-400"
          placeholder="Your message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-gray-800 dark:bg-white 
            dark:text-black text-white rounded-full font-medium
            hover:bg-black dark:hover:bg-gray-200 transition"
          >
            Send Message →
          </button>
        </div>
      </form>
    </div>
  );
}
