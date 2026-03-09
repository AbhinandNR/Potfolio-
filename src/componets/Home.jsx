import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="
          py-32
          flex flex-col
          justify-center
          items-center
          text-center
          px-6
          bg-gradient-to-br
          from-indigo-50
          via-purple-50
          to-blue-50
        "
      >
        <div className="max-w-4xl space-y-8">

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-800">
            Hi, I'm <span className="text-indigo-600">Abhinand</span> 👋
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-medium">
            Full Stack Web Developer
          </p>

          <p className="text-slate-500 text-lg">
            React • Node.js • MongoDB • Tailwind • AI/ML
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button
              onClick={() => navigate("/projects")}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl hover:bg-indigo-700 hover:scale-105 transition shadow-lg"
            >
              View Projects
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="backdrop-blur-lg bg-white/70 border border-white/40 px-8 py-4 rounded-2xl hover:scale-105 transition shadow-md"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section className="py-28 md:py-32 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-14">Tech Stack</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Tailwind",
              "Firebase",
              "Git",
              "JavaScript",
              "Python",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-indigo-50 py-6 rounded-xl font-semibold shadow hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>


   {/* ================= PROJECT PREVIEW ================= */}
<section className="py-28 md:py-32 bg-slate-50 text-center">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-14">Featured Projects</h2>

    <div className="grid md:grid-cols-3 gap-10">

      {[
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
      ].map((project, index) => (

        <div
          key={index}
          className="
            bg-white p-8 rounded-xl shadow-lg
            hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300 text-left
          "
        >
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {project.desc}
          </p>

          <button
            onClick={() => navigate("/projects")}
            className="mt-6 text-indigo-600 font-medium hover:text-indigo-800 transition"
          >
            View Details →
          </button>
        </div>

      ))}




    </div>

    <button
      onClick={() => navigate("/projects")}
      className="mt-14 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
    >
      See All Projects
    </button>

  </div>
</section>



      {/* ================= CTA ================= */}
      <section className="py-28 md:py-32 bg-indigo-600 text-white text-center space-y-8">
        <h2 className="text-3xl font-bold">
          Let's Build Something Together 🚀
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get In Touch
        </button>
      </section>

    </div>
  );
};

export default Home;
