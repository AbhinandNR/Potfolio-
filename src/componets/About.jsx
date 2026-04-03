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

        {/* Glass Card */}
        <div
          className="
            backdrop-blur-2xl
            bg-white/80
            border border-white
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            rounded-3xl
            p-12 md:p-16
            text-lg md:text-xl
            text-gray-600
            leading-relaxed
            text-left
          "
        >
          <p>
            Hi, I'm <span className="font-bold text-[#1F2937]">Abhinand</span> —
            a DevOps Engineer and Cloud Enthusiast highly dedicated to
            building scalable software infrastructure and establishing seamless automation.
          </p>

          <br />

          <p>
            With a solid foundation in modern development practices, I specialize in bridging the gap between development and operations. I leverage cloud-native services to orchestrate robust, highly available systems and continuously strive to reduce deployment friction.
          </p>

          <br />

          <p>
            Over recent projects, including deploying 
            <span className="font-semibold text-[#4F8EF7]"> enterprise-grade AI Chatbots</span> and
            <span className="font-semibold text-[#4F8EF7]"> microservice marketplaces</span>, 
            my focus has been entirely on reliability, observability, and driving CI/CD excellence across the board.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About
