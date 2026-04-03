import React from 'react'

const projects = [
  {
    title: "Inventory Forecasting Dashboard",
    desc: "A company-grade inventory management dashboard providing a comprehensive view of current stock levels vs ML-predicted sales, enabling strategic data-driven restocking decisions.",
    github: "https://github.com/AbhinandNR/Inventory-Forcasting.git",
    tech: ["React", "Python", "ML", "Tailwind"]
  },
  {
    title: "BookCycle – Used Books Marketplace",
    desc: "Full-stack e-commerce platform for buying, selling, and renting books with authentication, cart system, and rental duration logic.",
    github: "https://github.com/AbhinandNR",
    tech: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "PawCare – Complete Pet Care Solution",
    desc: "Pet care marketplace for purchasing food & toys, adopting pets, and booking grooming or veterinary appointments.",
    github: "https://github.com/AbhinandNR",
    tech: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    title: "AI Chatbot",
    desc: "NLP chatbot built with LSTM, Seq2Seq architecture, Attention mechanism, and Beam Search decoding for intelligent conversations.",
    github: "https://github.com/AbhinandNR",
    tech: ["Python", "LSTM", "NLP"]
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        py-40 px-6
        min-h-screen
        bg-[#F9FAFB]
        relative
        overflow-hidden
      "
    >
      {/* Background soft blob */}
      <div className="absolute top-10 inset-x-0 mx-auto w-[600px] h-[600px] bg-[#A78BFA]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#1F2937] tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA]">Projects</span>
        </h2>

        <p className="text-gray-500 text-lg mb-20 max-w-2xl mx-auto">
          Real-world applications showcasing Full-Stack engineering, AI integrations, and resilient system architectures.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-14 text-left">

          {projects.map((p, index) => (

            <div
              key={index}
              className={`
                group
                bg-white
                border border-gray-100
                p-10
                rounded-3xl
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_40px_rgba(167,139,250,0.15)]
                hover:border-[#A78BFA]/30
                hover:-translate-y-2
                transition-all
                duration-500
                flex flex-col h-full
                relative
                ${index === 0 ? "md:col-span-2 lg:col-span-2 lg:flex-row gap-8 items-center bg-gradient-to-br from-white to-[#F9FAFB]" : ""}
              `}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl border-0"></div>

              {index === 0 && (
                <div className="hidden lg:flex w-1/3 bg-[#4F8EF7]/5 h-full rounded-2xl items-center justify-center border border-[#4F8EF7]/20 p-8">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block filter drop-shadow-sm">📈</span>
                    <span className="text-[#4F8EF7] font-bold tracking-widest text-sm uppercase">Case Study</span>
                  </div>
                </div>
              )}

              <div className="flex-1 w-full">
                {index === 0 && <span className="lg:hidden inline-block px-3 py-1 bg-[#4F8EF7]/10 text-[#4F8EF7] text-xs font-bold rounded-full mb-4 uppercase tracking-widest">Case Study</span>}
                <h3 className={`font-bold text-gray-900 mb-4 group-hover:text-[#4F8EF7] transition-colors ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>
                  {p.title}
                </h3>
                
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#F9FAFB] text-gray-600 border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {p.desc}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2
                    bg-[#F9FAFB] hover:bg-gray-100 text-gray-700
                    px-5 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-300 border border-gray-200 hover:border-gray-300
                  "
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1z"></path></svg>
                  Source Code
                </a>
                
                <button
                  className="
                    text-[#4F8EF7]
                    font-semibold
                    hover:text-[#A78BFA]
                    transition-colors group-hover:translate-x-1 inline-flex items-center gap-1
                  "
                >
                  Live Demo →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
