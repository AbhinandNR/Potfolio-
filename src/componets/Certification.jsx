import React from 'react'

const certificate = [
  {
    title: "DevOps Fundamentals",
    desc: "Certified by IBM Developer Skills Network - Issued by Etrain Education in March 2026. Gained robust knowledge in DevOps culture, CI/CD, and Cloud integrations.",
    date: "Mar 2026",
    tag: "IBM"
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    desc: "Issued by Amazon Web Services Training and Certification. Foundational knowledge of AWS Cloud concepts, security, and architecture.",
    date: "2025",
    tag: "AWS"
  },
  {
      title:"Introduction to Intelligent Virtual Agents (IVAs) with IBM watsonx Assistant",
      desc:"Issued by IBM",
      date: "2024",
      tag: "AI"
  },
  {
      title:"IBM watsonx.ai Technical Essentials",
      desc:"Issued by IBM",
      date: "2024",
      tag: "AI"
  },
  {
    title: "CCSA",
    desc: "Certified Cloud Security Associate by Red Team Hacker Academy",
    date: "2023",
    tag: "Security"
  }
]

const Certification = () => {
    return (


        <section
            id="certificates"
            className="
        py-40 px-6
        min-h-screen
        bg-[#F9FAFB]
        relative
      "
        >
            {/* Background Blob */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#4F8EF7]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Heading */}
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#1F2937] tracking-tight">
                        Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#34D399]">Certifications</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        A continuous journey of learning and solidifying Cloud and DevOps expertise.
                    </p>
                </div>

                {/* Timeline Layout */}
                <div className="relative border-l-2 border-[#4F8EF7]/30 ml-4 md:ml-8 space-y-12 pb-12">

                    {certificate.map((p, index) => (

                        <div
                            key={index}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Dot indicator */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#4F8EF7] border-4 border-[#F9FAFB] group-hover:scale-150 group-hover:bg-[#34D399] transition-all duration-300 shadow-sm"></div>

                            {/* Content Card */}
                            <div className="
                                bg-white
                                border border-gray-100
                                p-8
                                rounded-3xl
                                shadow-sm
                                hover:shadow-[0_10px_30px_rgba(79,142,247,0.1)]
                                hover:border-[#4F8EF7]/30
                                hover:-translate-y-1
                                transition-all
                                duration-500
                                text-left
                            ">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#4F8EF7] transition-colors">
                                        {p.title}
                                    </h3>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F8EF7]/10 text-[#4F8EF7] text-sm font-semibold whitespace-nowrap">
                                        {p.date}
                                    </span>
                                </div>

                                <span className="inline-block mb-4 text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
                                    {p.tag}
                                </span>

                                <p className="text-gray-600 leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>


    )
}

export default Certification