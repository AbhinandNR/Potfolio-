import React from 'react'

const certificate = [{
    title: "CCSA",
    desc: "Certified Cloud Security Associate by Red Team Hacker Accademy"
},
{
    title: "AI bignner",
    desc: "Certification by OSPF, ULRC"
},
{
    title: "AWS Academy Graduate - Cloud Foundations ",
    desc: "Issued by Amazon Web Services Training and Certification"
},
{
    title:"Introduction to Intelligent Virtual Agents (IVAs) with IBM watsonx Assistant",
    desc:"Issued by IBM"
},
{
    title:"IBM watsonx.ai Technical Essentials",
    desc:"Issued by IBM"
}

]

const Certification = () => {
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
                    Certificates
                </h2>

                <p className="text-slate-500 text-lg mb-24">
                    Verified skills through industry-recognized certifications and achievements.
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-20">

                    {certificate.map((p, index) => (


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

export default Certification