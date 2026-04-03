import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaAws, FaDocker, FaLinux, FaChevronDown, FaCloud, FaServer } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins, SiGithubactions, SiPython } from "react-icons/si";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("translate-y-0", "opacity-100");
          entry.target.classList.remove("translate-y-10", "opacity-0");
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="
          min-h-screen
          flex flex-col md:flex-row
          justify-center
          items-center
          text-center md:text-left
          px-6 md:px-12
          pt-20
          relative
          overflow-hidden
        "
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#A78BFA] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#4F8EF7] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-12">
          {/* Text Content */}
          <div className="max-w-2xl space-y-8 flex-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1F2937] tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA] drop-shadow-sm">Abhinand</span> 👋
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-medium tracking-wide">
              DevOps Engineer & Cloud Enthusiast
            </p>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Architecting scalable infrastructure, automating CI/CD pipelines, and ensuring secure, highly-available cloud deployments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center md:justify-start">
              <button
                onClick={() => navigate("/projects")}
                className="bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA] text-white px-8 py-4 rounded-xl font-medium shadow-[0_4px_14px_0_rgba(167,139,250,0.39)] hover:shadow-[0_6px_20px_rgba(167,139,250,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white/80 border border-gray-200 backdrop-blur-md text-gray-700 px-8 py-4 rounded-xl font-medium shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Floating DevOps Illustration */}
          <div className="hidden lg:flex flex-1 relative justify-center items-center isolate">
            <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-[#4F8EF7]/20 to-[#34D399]/20 rounded-full blur-[60px] -z-10"></div>
            <div className="relative w-80 h-80 animate-[spin_30s_linear_infinite]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(79,142,247,0.15)] border border-gray-100 animate-[spin_30s_linear_infinite_reverse]">
                  <FaCloud className="text-6xl text-[#4F8EF7]" />
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -ml-8 -mt-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-[spin_30s_linear_infinite_reverse] hover:scale-110 transition-transform"><FaDocker className="text-3xl text-[#2496ED]" /></div>
              <div className="absolute bottom-0 left-1/2 -ml-8 -mb-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-[spin_30s_linear_infinite_reverse] hover:scale-110 transition-transform"><SiKubernetes className="text-3xl text-[#326CE5]" /></div>
              <div className="absolute top-1/2 -left-8 -mt-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-[spin_30s_linear_infinite_reverse] hover:scale-110 transition-transform"><FaAws className="text-3xl text-[#FF9900]" /></div>
              <div className="absolute top-1/2 -right-8 -mt-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-[spin_30s_linear_infinite_reverse] hover:scale-110 transition-transform"><FaServer className="text-3xl text-[#A78BFA]" /></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-sm font-medium text-gray-400">Scroll</span>
          <FaChevronDown className="text-gray-400" />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A78BFA]/40 to-transparent"></div>


      {/* ================= SKILLS ================= */}
      <section className="py-28 md:py-32 bg-white text-center border-y border-gray-100 reveal-on-scroll translate-y-10 opacity-0 transition-all duration-700 ease-out">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-gray-900">DevOps Toolchain</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "AWS Cloud", icon: <FaAws className="text-[#FF9900]" /> },
              { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
              { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
              { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> },
              { name: "Terraform", icon: <SiTerraform className="text-[#844FBA]" /> },
              { name: "Linux", icon: <FaLinux className="text-[#FCC624]" /> },
              { name: "Jenkins", icon: <SiJenkins className="text-[#D33833]" /> },
              { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
            ].map((skill, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className="
                  group
                  bg-[#F9FAFB] border border-gray-100 py-8 px-6 rounded-2xl 
                  shadow-sm hover:shadow-[0_8px_30px_rgba(79,142,247,0.12)] 
                  hover:border-[#4F8EF7]/30 hover:bg-white hover:-translate-y-2
                  transition-all duration-300 flex flex-col items-center gap-4
                  reveal-on-scroll translate-y-10 opacity-0
                "
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
                  {skill.icon}
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-[#4F8EF7] transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#34D399]/40 to-transparent"></div>


      {/* ================= PROJECT PREVIEW ================= */}
      <section className="py-28 md:py-32 bg-[#F9FAFB] text-center border-b border-gray-100 relative reveal-on-scroll translate-y-10 opacity-0 transition-all duration-700 ease-out">
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#34D399] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-gray-900">Featured Projects</h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                title: "Inventory Forecasting",
                desc: "Company-grade inventory management dashboard predicting sales & defining optimal restocking based on ML data.",
                github: "https://github.com/AbhinandNR/Inventory-Forcasting.git"
              },
              {
                title: "BookCycle Marketplace",
                desc: "Full-stack e-commerce system for book trading/rentals utilizing microservices architecture layout.",
                github: "https://github.com/AbhinandNR"
              },
              {
                title: "PawCare Solution",
                desc: "Pet marketplace for buying essentials, adopting, and scheduling services with secure data handling.",
                github: "https://github.com/AbhinandNR"
              },
              {
                title: "AI Chatbot Infrastructure",
                desc: "Scalable NLP conversational model deployment maintaining high availability and low latency.",
                github: "https://github.com/AbhinandNR"
              }
            ].map((project, index) => (

              <div
                key={index}
                style={{ transitionDelay: `${index * 150}ms` }}
                className="
                  bg-white backdrop-blur-lg border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                  hover:shadow-[0_8px_30px_rgba(79,142,247,0.12)] hover:border-[#4F8EF7]/30 hover:-translate-y-2
                  transition-all duration-300 text-left flex flex-col h-full relative overflow-hidden group
                  reveal-on-scroll translate-y-10 opacity-0
                "
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#4F8EF7] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => navigate("/projects")}
                    className="text-[#4F8EF7] text-sm font-semibold hover:text-[#3B73D4] transition-colors inline-flex items-center gap-1 group/btn"
                  >
                    View Details 
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-800 transition-colors"
                      title="View GitHub"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1z"></path></svg>
                    </a>
                  )}
                </div>
              </div>

            ))}

          </div>

          <button
            onClick={() => navigate("/projects")}
            className="mt-16 bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            See All Projects
          </button>

        </div>
      </section>



      {/* ================= CTA ================= */}
      <section className="py-28 md:py-32 bg-white text-gray-900 text-center space-y-8 relative overflow-hidden reveal-on-scroll translate-y-10 opacity-0 transition-all duration-700 ease-out">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F8EF7]/5 to-[#A78BFA]/5 opacity-100 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
            Ready to Automate & Scale? 🚀
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="bg-[#1F2937] text-white px-10 py-4 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Let's Collaborate
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
