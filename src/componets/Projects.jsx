import React from 'react'

const projects = [
  {
    title: "BookCycle – Used Books Marketplace",
    desc: "Full-stack e-commerce platform for buying, selling, and renting books with authentication, cart system, and rental duration logic using React, Node.js, Express, and MongoDB."
  },
  {
    title: "PawCare – Complete Pet Care Solution",
    desc: "Pet care marketplace for purchasing food & toys, adopting pets, and booking grooming or veterinary appointments using PHP, MySQL, and Bootstrap."
  },
  {
    title: "AI Chatbot",
    desc: "NLP chatbot built with LSTM, Seq2Seq architecture, Attention mechanism, and Beam Search decoding for intelligent conversations."
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        py-44 px-6
        bg-gradient-to-br
        from-indigo-50
        via-purple-50
        to-blue-50
      "
    >

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-6xl font-bold mb-8 text-slate-800">
          Projects
        </h2>

        <p className="text-slate-500 text-lg mb-24">
          Real-world applications showcasing Full-Stack, AI & System Design skills
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-20">

          {projects.map((p, index) => (

            
            <div
              key={index}
              className="
                backdrop-blur-lg
                bg-white/70
                border border-white/40
                p-12
                rounded-3xl
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-4
                transition-all
                duration-500
                text-left
              "
            >
              <h3 className="text-2xl font-semibold text-indigo-700 mb-6">
                {p.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg">
                {p.desc}
              </p>

              <button
                className="
                  mt-10
                  text-indigo-600
                  font-medium
                  hover:text-indigo-800
                  transition
                "
              >
                View Details →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
