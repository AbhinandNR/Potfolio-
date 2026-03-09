import React from 'react'

const Contact = () => {
  return (
    <section
      id="contacts"
      className="
        py-48 px-6
        bg-gradient-to-br
        from-indigo-50
        via-purple-50
        to-blue-50
      "
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-slate-800 mb-6">
          Let’s Work Together
        </h2>

        <p className="text-slate-500 text-lg mb-20">
          Got a project idea or job opportunity? Feel free to reach out.
        </p>

        {/* Glass Card */}
        <form
          className="
            backdrop-blur-xl
            bg-white/70
            border border-white/40
            shadow-2xl
            rounded-3xl
            p-16
            space-y-10
          "
        >

          {/* Inputs row */}
          <div className="grid md:grid-cols-2 gap-10">

            <input
              type="text"
              placeholder="Your Name"
              className="
                border border-slate-200
                p-5 rounded-2xl
                focus:ring-2 focus:ring-indigo-500
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                border border-slate-200
                p-5 rounded-2xl
                focus:ring-2 focus:ring-indigo-500
                outline-none
              "
            />

          </div>

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Your Message"
            className="
              w-full
              border border-slate-200
              p-5 rounded-2xl
              focus:ring-2 focus:ring-indigo-500
              outline-none
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              bg-indigo-600
              text-white
              py-5
              rounded-2xl
              text-lg
              hover:bg-indigo-700
              hover:scale-105
              transition-all
            "
          >
            Send Message
          </button>

        </form>

        {/* Contact Info */}
        <div className="mt-16 space-y-3 text-slate-500">
          <p>
            📧 <span className="font-medium text-indigo-700">abhinandnr1@gmail.com</span>
          </p>
          <p>📍 Kerala, India</p>
        </div>

      </div>

    </section>
  )
}

export default Contact
