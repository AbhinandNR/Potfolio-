import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="
        py-48 px-6
        min-h-screen
        bg-[#F9FAFB]
        relative
        overflow-hidden
      "
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A78BFA]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4F8EF7]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#1F2937] tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA]">Me</span>
        </h2>

        {/* About Grid */}
        <div className="grid lg:grid-cols-3 gap-8 text-left">
          
          {/* Main Copy */}
          <div className="lg:col-span-2 backdrop-blur-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl p-10 md:p-12 text-lg text-gray-600 leading-relaxed relative overflow-hidden group hover:border-[#4F8EF7]/30 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#4F8EF7] transition-colors">Continuous Learner & Builder</h3>
            <p className="mb-4">
              I am an MCA student and full-stack developer passionate about building scalable, high-performance web applications. During my internship at Kenmerk Softwares, I gained hands-on experience designing intuitive user interfaces and robust APIs.
            </p>
            <p className="mb-4">
              My technical journey bridges the gap between theoretical computer science and practical software engineering. By mastering Node.js, React, and cloud-native fundamentals, I strive to write clean code that delivers real-world business value.
            </p>
            <p className="font-medium text-gray-800 mt-8 border-l-4 border-[#34D399] pl-6 py-2 italic bg-gray-50 rounded-r-xl">
              "Career Objective: To join a forward-thinking engineering team where I can apply my full-stack skills, foster innovation, and rapidly grow into a capable Software Engineer."
            </p>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-col justify-between gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex items-center gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#4F8EF7]">
              <div><span className="text-4xl text-[#4F8EF7] font-extrabold">20+</span></div>
              <div><span className="block font-bold text-gray-800">Projects Built</span><span className="text-sm text-gray-500">End-to-End</span></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex items-center gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#A78BFA]">
              <div><span className="text-4xl text-[#A78BFA] font-extrabold">12+</span></div>
              <div><span className="block font-bold text-gray-800">Tech Mastered</span><span className="text-sm text-gray-500">Advanced Topics</span></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex items-center gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#34D399]">
              <div><span className="text-4xl text-[#34D399] font-extrabold">3+</span></div>
              <div><span className="block font-bold text-gray-800">Certifications</span><span className="text-sm text-gray-500">Industry Validated</span></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About
