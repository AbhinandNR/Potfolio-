import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Inventory Forecasting System",
      problem: "Local businesses lacked an accurate way to predict stock demand, often leading to overstocking and expired goods.",
      solution: "Developed a full-stack dashboard utilizing React.js and Python (ML) to analyze sales trends and accurately forecast upcoming inventory requirements.",
      techStack: "React, Node.js, Python, MongoDB",
      impact: "Provided an interactive, data-driven tool that helps warehouse managers make informed restocking decisions.",
      github: "https://github.com/AbhinandNR/Inventory-Forcasting.git",
      demo: "#"
    },
    {
      title: "BookCycle Marketplace",
      problem: "University students struggled to find a safe, centralized platform to exchange or buy second-hand academic books.",
      solution: "Built a responsive MERN stack application allowing seamless user authentication, book listings, and in-app communications.",
      techStack: "React, Express, Node.js, Tailwind CSS, MongoDB,typescript",
      impact: "Delivered a clean, high-performance platform promoting book recycling among students.",
      github: "https://github.com/AbhinandNR",
      demo: "#"
    },
    {
      title: "PawCare Solution",
      problem: "Pet owners had to switch between multiple apps to manage pet care, adoption, and veterinary services.",
      solution: "Developed a comprehensive pet care platform with a custom-built PHP backend and dynamic MySQL database to manage pet service scheduling and adoption workflows.",
      techStack: "PHP, MySQL, HTML, CSS, Bootstrap",
      impact: "Demonstrated proficiency in server-side scripting, relational database management, and responsive frontend design.",
      github: "https://github.com/AbhinandNR",
      demo: "#"
    },
    {
      title: "AI Chatbot Integration",
      problem: "Websites needed an intelligent, real-time chatbot to handle common customer interactions without human intervention.",
      solution: "Engineered a low-latency conversational backend connected to a sleek React frontend UI.",
      techStack: "Python, FastAPI, React",
      impact: "Demonstrated strong understanding of RESTful services, real-time networking, and AI integration boundaries.",
      github: "https://github.com/AbhinandNR",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 min-h-screen bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#34D399]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-[#1F2937] tracking-tight">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA]">Case Studies</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-12 md:mb-20 max-w-2xl mx-auto">
          Deep dives into complex challenges, technical decisions, and the real-world impact of my recent applications.
        </p>

        <div className="flex flex-col gap-10 md:gap-16 text-left">
          {projects.map((p, index) => (
            <div
              key={index}
              className="
                group
                bg-white border border-gray-100 p-8 md:p-14
                rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_40px_rgba(167,139,250,0.15)]
                hover:border-[#A78BFA]/30 hover:-translate-y-2
                transition-all duration-500 relative overflow-hidden
              "
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#4F8EF7] to-[#A78BFA] opacity-50 group-hover:opacity-100 transition-opacity border-0"></div>

              <div className="grid lg:grid-cols-3 gap-12">
                
                {/* Left Column: Title & Tech */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#4F8EF7] transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.techStack.split(',').map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[#F9FAFB] text-gray-600 border border-gray-200 text-sm font-semibold rounded-full mt-2">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#1F2937] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-black transition-colors">
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-gray-200 text-gray-700 bg-white px-5 py-2.5 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm">
                         <FaExternalLinkAlt className="text-sm" /> Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Case Study Attributes */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-2 uppercase tracking-widest text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#D33833]"></span> The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">{p.problem}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-2 uppercase tracking-widest text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#4F8EF7]"></span> The Solution
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{p.solution}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-2 uppercase tracking-widest text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#34D399]"></span> Business Impact
                    </h4>
                    <p className="text-gray-600 leading-relaxed border-l-2 border-[#34D399] pl-4">{p.impact}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
