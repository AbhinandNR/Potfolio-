import React, { useEffect } from "react";
import { FaAws, FaDocker, FaFigma } from "react-icons/fa";
import { SiKubernetes, SiJenkins, SiGithubactions, SiPython, SiNodedotjs, SiReact } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("translate-y-0", "opacity-100");
          entry.target.classList.remove("translate-y-10", "opacity-0");
          
          // Animate progress bars
          const progressBox = entry.target.querySelector('.progress-bar-fill');
          if (progressBox) {
            setTimeout(() => {
              progressBox.style.width = progressBox.dataset.width;
            }, 300);
          }
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "UI/UX Design (Figma)", icon: <FaFigma className="text-[#F24E1E]" />, level: "80%" },
    { name: "React.js / Frontend", icon: <SiReact className="text-[#61DAFB]" />, level: "90%" },
    { name: "Node.js / Backend", icon: <SiNodedotjs className="text-[#339933]" />, level: "85%" },
    { name: "AWS Cloud Architecture", icon: <FaAws className="text-[#FF9900]" />, level: "90%" },
    { name: "Docker Containerization", icon: <FaDocker className="text-[#2496ED]" />, level: "85%" },
    { name: "Kubernetes Orchestration", icon: <SiKubernetes className="text-[#326CE5]" />, level: "80%" },
    { name: "GitHub Actions / CI-CD", icon: <SiGithubactions className="text-[#2088FF]" />, level: "85%" },
    { name: "Python Scripting", icon: <SiPython className="text-[#3776AB]" />, level: "85%" },
    { name: "Jenkins Automation", icon: <SiJenkins className="text-[#D33833]" />, level: "70%" },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 min-h-screen bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#34D399]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1F2937] tracking-tight">
          Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA]">Competencies</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-12 md:mb-20 max-w-2xl mx-auto">
          Strong foundation in modern web development, backend engineering, and building reliable applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {skills.map((s, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="
                group
                bg-white border border-gray-100 p-8 rounded-3xl 
                shadow-[0_8px_30px_rgba(0,0,0,0.04)] 
                hover:shadow-[0_20px_40px_rgba(167,139,250,0.15)] 
                hover:border-[#4F8EF7]/30 hover:-translate-y-2
                transition-all duration-500
                reveal-on-scroll translate-y-10 opacity-0
              "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#4F8EF7] transition-colors">{s.name}</h3>
              </div>
              
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                <div 
                  className="progress-bar-fill bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA] h-2 rounded-full transition-all duration-1000 w-0" 
                  data-width={s.level}
                ></div>
              </div>
              <p className="text-right text-sm font-semibold text-gray-500">{s.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
