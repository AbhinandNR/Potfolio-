import React from 'react'

const Contact = () => {
  return (
    <section
      id="contacts"
      className="
        py-48 px-6
        min-h-screen
        bg-white
        relative
        overflow-hidden
      "
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#34D399]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#4F8EF7]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#1F2937] mb-6 tracking-tight">
          Let’s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA]">Together</span>
        </h2>

        <p className="text-gray-500 text-lg mb-20 max-w-2xl mx-auto">
          Got a project idea or job opportunity? Feel free to reach out. I'm currently open for new opportunities.
        </p>

        {/* Glass Card */}
        <form
          className="
            backdrop-blur-xl
            bg-white
            border border-gray-100
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            rounded-3xl
            p-10 md:p-16
            space-y-10
            text-left
          "
        >

          {/* Inputs row */}
          <div className="grid md:grid-cols-2 gap-10">

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                bg-[#F9FAFB]
                border border-gray-200
                text-gray-900 placeholder-gray-400
                p-5 rounded-2xl
                focus:ring-2 focus:ring-[#4F8EF7]/50 focus:border-[#4F8EF7]
                outline-none transition-all duration-300
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                bg-[#F9FAFB]
                border border-gray-200
                text-gray-900 placeholder-gray-400
                p-5 rounded-2xl
                focus:ring-2 focus:ring-[#4F8EF7]/50 focus:border-[#4F8EF7]
                outline-none transition-all duration-300
              "
            />

          </div>

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Your Message..."
            className="
              w-full
              bg-[#F9FAFB]
              border border-gray-200
              text-gray-900 placeholder-gray-400
              p-5 rounded-2xl
              focus:ring-2 focus:ring-[#4F8EF7]/50 focus:border-[#4F8EF7]
              outline-none transition-all duration-300 resize-none
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA]
              text-white font-medium
              py-5
              rounded-2xl
              text-lg
              hover:shadow-[0_8px_25px_rgba(167,139,250,0.3)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            Send Message
          </button>

        </form>

        {/* Contact Info */}
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-500">
          <a href="mailto:abhinandnr1@gmail.com" className="flex items-center gap-3 hover:text-[#4F8EF7] transition-colors">
            <span className="text-2xl">📧</span> <span className="font-medium text-gray-700 tracking-wide">abhinandnr1@gmail.com</span>
          </a>
          <div className="hidden md:block w-2 h-2 rounded-full bg-gray-300"></div>
          <p className="flex items-center gap-3">
            <span className="text-2xl">📍</span> <span className="font-medium text-gray-700 tracking-wide">Kerala, India</span>
          </p>
        </div>

      </div>

    </section>
  )
}

export default Contact
