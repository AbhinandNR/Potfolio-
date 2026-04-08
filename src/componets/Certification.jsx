import React, { useState } from 'react'
import {
  FaAws, FaShieldAlt, FaBriefcase, FaRobot,
  FaCode, FaGraduationCap, FaTimes, FaExpand,
  FaCloud, FaBrain
} from 'react-icons/fa'

/* ------------------------------------------------------------------ */
/* DATA                                                                  */
/* ------------------------------------------------------------------ */

const certifications = [
  {
    title: "DevOps Fundamentals",
    issuer: "IBM Developer Skills Network / Etrain Education",
    date: "Mar 2026",
    tag: "IBM · DevOps",
    desc: "Certified in DevOps culture, CI/CD pipeline design, and cloud integration strategies. Strengthened ability to bridge development and operations for faster, reliable software delivery.",
    icon: <FaCode className="text-[#4F8EF7] text-2xl" />,
    borderColor: "#4F8EF7",
    certImage: null   // drop file at public/certs/devops-ibm.jpg to enable
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    tag: "AWS · Cloud",
    desc: "Foundational knowledge of AWS cloud architecture, core services, security best practices, and pricing models — structured for real-world cloud deployment.",
    icon: <FaAws className="text-[#FF9900] text-2xl" />,
    borderColor: "#FF9900",
    certImage: null   // public/certs/aws-cloud.jpg
  },
  {
    title: "AI for Beginners",
    issuer: "UL Research Centre & Open Source Pharma Foundation",
    date: "Nov 2023 – Apr 2024",
    tag: "AI · Research",
    desc: "Completed structured AI training covering machine learning fundamentals, neural networks, and real-world AI application design.",
    icon: <FaBrain className="text-[#A78BFA] text-2xl" />,
    borderColor: "#A78BFA",
    certImage: "/certs/ai-beginners.jpg"  // place your AI cert here
  },
  {
    title: "Introduction to Intelligent Virtual Agents (IVAs) with IBM watsonx Assistant",
    issuer: "IBM",
    date: "2024",
    tag: "IBM · AI",
    desc: "Learned fundamentals of designing and deploying intelligent virtual agents using IBM watsonx Assistant for real-world conversational AI use-cases.",
    icon: <FaRobot className="text-[#A78BFA] text-2xl" />,
    borderColor: "#A78BFA",
    certImage: null
  },
  {
    title: "IBM watsonx.ai Technical Essentials",
    issuer: "IBM",
    date: "2024",
    tag: "IBM · AI",
    desc: "Core knowledge of AI tools, foundation models, and practical implementation workflows through IBM's watsonx.ai platform.",
    icon: <FaCode className="text-[#052FAD] text-2xl" />,
    borderColor: "#052FAD",
    certImage: null
  },
  {
    title: "Certified Cloud Security Associate (CCSA)",
    issuer: "Red Team Hacker Academy",
    date: "2023",
    tag: "Security · Cloud",
    desc: "Cloud security fundamentals including identity management, threat modeling, and secure architecture design for cloud environments.",
    icon: <FaShieldAlt className="text-[#34D399] text-2xl" />,
    borderColor: "#34D399",
    certImage: null
  }
]

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    status: "Currently Pursuing",
    statusColor: "#4F8EF7",
    desc: "Advancing knowledge in advanced software engineering, data structures, algorithms, and enterprise application architecture.",
    icon: <FaGraduationCap className="text-[#4F8EF7] text-2xl" />,
    borderColor: "#4F8EF7"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    status: "Completed",
    statusColor: "#34D399",
    desc: "Built a strong foundation in programming fundamentals, networking, operating systems, databases, and web development.",
    icon: <FaGraduationCap className="text-[#34D399] text-2xl" />,
    borderColor: "#34D399"
  }
]

/* ------------------------------------------------------------------ */
/* LIGHTBOX                                                              */
/* ------------------------------------------------------------------ */
const Lightbox = ({ src, title, onClose }) => (
  <div
    className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
    onClick={onClose}
  >
    <div
      className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-3xl w-full"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors z-10"
      >
        <FaTimes />
      </button>
      <img src={src} alt={title} className="w-full object-contain max-h-[80vh]" />
      <p className="text-center text-gray-600 font-medium py-4 px-6 border-t border-gray-100">{title}</p>
    </div>
  </div>
)

/* ------------------------------------------------------------------ */
/* CERT IMAGE CARD                                                       */
/* ------------------------------------------------------------------ */
const CertImageCard = ({ src, title }) => {
  const [open, setOpen] = useState(false)

  if (!src) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-6 text-center text-gray-400 text-sm select-none">
        <FaExpand className="mx-auto mb-2 opacity-40 text-lg" />
        Drop certificate image in <code className="bg-gray-100 px-1 rounded text-xs">public/certs/</code> to enable preview
      </div>
    )
  }

  return (
    <>
      <div
        className="mt-6 relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={title} className="w-full object-cover max-h-52 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-sm font-medium flex items-center gap-2">
            <FaExpand className="text-xs" /> Click to preview full certificate
          </span>
        </div>
      </div>
      {open && <Lightbox src={src} title={title} onClose={() => setOpen(false)} />}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                         */
/* ------------------------------------------------------------------ */
const Certification = () => {
  return (
    <section
      id="certificates"
      className="py-20 md:py-32 px-4 md:px-6 min-h-screen bg-[#F9FAFB] relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#4F8EF7]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#A78BFA]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-20 md:space-y-28">

        {/* ---- HEADING ---- */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#1F2937] tracking-tight">
            Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#34D399]">
              Certifications
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            A continuous journey of learning and strengthening Cloud and DevOps expertise.
          </p>
        </div>

        {/* ================================================================= */}
        {/* EDUCATION                                                           */}
        {/* ================================================================= */}
        <div>
          <SectionLabel icon={<FaGraduationCap className="text-[#4F8EF7]" />} label="Education" />

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-[0_16px_40px_rgba(79,142,247,0.1)] hover:-translate-y-1 hover:border-[#4F8EF7]/25 transition-all duration-400 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${edu.borderColor}, #A78BFA)` }}
                />
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex-shrink-0">{edu.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4F8EF7] transition-colors leading-snug">
                      {edu.degree}
                    </h3>
                    <span
                      className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: edu.statusColor + '18', color: edu.statusColor }}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* EXPERIENCE                                                          */}
        {/* ================================================================= */}
        <div>
          <SectionLabel icon={<FaBriefcase className="text-[#A78BFA]" />} label="Internship Experience" />

          <div className="mt-8 group bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-[0_20px_50px_rgba(167,139,250,0.12)] hover:-translate-y-1 hover:border-[#A78BFA]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#4F8EF7] transition-colors mb-1">
                  Software Developer Intern
                </h3>
                <p className="text-[#A78BFA] font-semibold text-lg">Kenmerk Softwares Pvt Ltd</p>
              </div>
              <span className="inline-block px-5 py-2 rounded-full bg-[#A78BFA]/10 text-[#A78BFA] text-sm font-bold whitespace-nowrap h-max">
                Dec 2025 – Mar 2026
              </span>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Developed and maintained production-ready features using Node.js and React.js.",
                "Collaborated in an agile, real-world development environment with structured sprints.",
                "Built and integrated RESTful APIs, improving application performance and reliability.",
                "Contributed end-to-end to the Inventory Forecasting System — from UI to backend logic."
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #4F8EF7, #A78BFA)' }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* Internship certificate image */}
            <CertImageCard
              src="/certs/kenmerk-internship.jpg"
              title="Internship Certificate – Kenmerk Softwares Pvt Ltd"
            />
          </div>
        </div>

        {/* ================================================================= */}
        {/* CERTIFICATIONS TIMELINE                                             */}
        {/* ================================================================= */}
        <div>
          <SectionLabel icon={<FaCloud className="text-[#34D399]" />} label="Certifications" />

          <div className="relative border-l-2 border-[#4F8EF7]/25 ml-3 md:ml-6 space-y-10 pb-4 mt-8">
            {certifications.map((cert, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[9px] top-6 w-4 h-4 rounded-full border-4 border-[#F9FAFB] group-hover:scale-150 transition-all duration-300 shadow-sm"
                  style={{ backgroundColor: cert.borderColor }}
                />

                {/* Card */}
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-[0_12px_35px_rgba(79,142,247,0.09)] hover:border-[#4F8EF7]/25 hover:-translate-y-1 transition-all duration-500 text-left relative overflow-hidden">
                  {/* Left accent bar */}
                  <div
                    className="absolute top-0 left-0 h-full w-1 opacity-30 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: cert.borderColor }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#4F8EF7] transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0 md:pl-0">
                      <span className="px-4 py-1.5 rounded-full bg-[#4F8EF7]/10 text-[#4F8EF7] text-sm font-semibold whitespace-nowrap">
                        {cert.date}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
                        {cert.tag}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed md:pl-16">{cert.desc}</p>

                  {/* Certificate Image */}
                  <div className="md:pl-16">
                    <CertImageCard src={cert.certImage} title={cert.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* HELPER                                                                 */
/* ------------------------------------------------------------------ */
const SectionLabel = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <div className="p-2 bg-white border border-gray-100 rounded-xl shadow-sm">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800">{label}</h3>
    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-2" />
  </div>
)

export default Certification