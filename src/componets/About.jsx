import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="
        py-48 px-6
        bg-gradient-to-br
        from-indigo-50
        via-purple-50
        to-blue-50
      "
    >

      <div className="max-w-5xl mx-auto text-center space-y-16">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-slate-800">
          About Me
        </h2>

        {/* Glass Card */}
        <div
          className="
            backdrop-blur-xl
            bg-white/70
            border border-white/40
            shadow-2xl
            rounded-3xl
            p-16
            text-lg
            text-slate-600
            leading-relaxed
          "
        >
          <p>
            Hi, I'm <span className="font-semibold text-indigo-700">Abhinand</span> —
            a Full Stack Web Developer and MCA graduate passionate about
            building modern, scalable, and user-friendly web applications.
          </p>

          <br />

          <p>
            I specialize in React, Node.js, and modern JavaScript technologies,
            and I love transforming ideas into real products that solve
            meaningful problems.
          </p>

          <br />

          <p>
            Recently, I built real-world platforms like a
            <span className="font-medium text-indigo-700"> Used Books Marketplace</span>
            and a
            <span className="font-medium text-indigo-700"> Pet Care Service App</span>,
            focusing on clean UI, performance, and full-stack architecture.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About
