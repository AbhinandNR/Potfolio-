import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaDownload } from "react-icons/fa";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-0 font-serif">
      {/* Action Bar (Hidden on Print) */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <p className="text-sm text-gray-500 font-sans">Professional Digital Resume</p>
        <div className="flex gap-4">
            <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-[#1a4b8c] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#123666] transition-all shadow-md active:scale-95 font-sans"
            >
            <FaDownload /> Download PDF
            </button>
        </div>
      </div>

      {/* Resume Document */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden print:shadow-none print:w-full">
        
        {/* Header Section */}
        <div className="bg-[#1a4b8c] text-white p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight mb-4 uppercase">ABHINAND N R</h1>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-sans font-medium tracking-widest opacity-90 uppercase">
            <span>Full-Stack Developer</span>
            <span className="hidden md:inline">|</span>
            <span>Mobile UI Designer</span>
            <span className="hidden md:inline">|</span>
            <span>MCA Student</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12">
          
          {/* LEFT COLUMN (Sidebar) */}
          <div className="md:col-span-4 bg-[#f8fafc] p-8 space-y-10 border-r border-blue-100">
            
            {/* Contact */}
            <section>
              <h3 className="text-sm font-bold text-[#1a4b8c] border-b-2 border-[#1a4b8c] pb-1 mb-4 uppercase tracking-wider font-sans">Contact</h3>
              <div className="space-y-3 text-[13px] text-gray-700 font-sans leading-relaxed">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#1a4b8c]" /> 9656500176
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#1a4b8c]" /> abhinandnr1@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#1a4b8c]" /> Sulthan Bathery, Kerala
                </div>
                <a href="https://linkedin.com/in/abhinandnr" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#1a4b8c]">
                  <FaLinkedin className="text-[#1a4b8c]" /> linkedin.com/in/abhinandnr
                </a>
                <a href="https://github.com/AbhinandNR" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#1a4b8c]">
                  <FaGithub className="text-[#1a4b8c]" /> github.com/AbhinandNR
                </a>
                <div className="flex items-center gap-3 uppercase font-bold tracking-tight text-[#1a4b8c]">
                  <FaGlobe className="text-[#1a4b8c]" /> Portfolio
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-sm font-bold text-[#1a4b8c] border-b-2 border-[#1a4b8c] pb-1 mb-4 uppercase tracking-wider font-sans">Technical Skills</h3>
              <div className="space-y-4 text-[13px] text-gray-700 font-sans">
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 border-l-2 border-[#1a4b8c] pl-2 uppercase text-[11px]">Frontend</h4>
                  <p>React, HTML5, CSS3, Bootstrap 5, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 border-l-2 border-[#1a4b8c] pl-2 uppercase text-[11px]">Backend</h4>
                  <p>Node.js, Express.js, PHP</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 border-l-2 border-[#1a4b8c] pl-2 uppercase text-[11px]">Databases</h4>
                  <p>MySQL, MongoDB</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 border-l-2 border-[#1a4b8c] pl-2 uppercase text-[11px]">Cloud & DevOps</h4>
                  <p>AWS (NSDC), CI/CD, DevOps Practices</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 border-l-2 border-[#1a4b8c] pl-2 uppercase text-[11px]">AI & Data</h4>
                  <p>IBM watsonx, KNIME, Orange, Power BI</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 border-l-2 border-[#1a4b8c] pl-2 uppercase text-[11px]">Design</h4>
                  <p>Figma, Canva, Mobile UI/UX Design</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 border-l-2 border-[#1a4b8c] pl-2 uppercase text-[11px]">Tools</h4>
                  <p>GitHub, VS Code</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-sm font-bold text-[#1a4b8c] border-b-2 border-[#1a4b8c] pb-1 mb-4 uppercase tracking-wider font-sans">Languages</h3>
              <p className="text-[13px] text-gray-700 font-sans">English | Malayalam | Hindi</p>
            </section>

            {/* Soft Skills */}
            <section>
              <h3 className="text-sm font-bold text-[#1a4b8c] border-b-2 border-[#1a4b8c] pb-1 mb-4 uppercase tracking-wider font-sans">Soft Skills</h3>
              <ul className="text-[13px] text-gray-700 font-sans space-y-1">
                <li>• Teamwork</li>
                <li>• Problem-Solving</li>
                <li>• Critical Thinking</li>
                <li>• Communication</li>
                <li>• Adaptability</li>
              </ul>
            </section>
          </div>

          {/* MAIN CONTENT Area */}
          <div className="md:col-span-8 p-10 space-y-10">
            
            {/* Summary */}
            <section>
              <h3 className="text-lg font-bold text-[#1a4b8c] border-b border-gray-200 pb-1 mb-4 uppercase tracking-widest font-sans">Professional Summary</h3>
              <p className="text-[14px] text-gray-700 leading-relaxed text-justify">
                MCA student with real-world internship experience building full-stack web applications and designing mobile app UIs for client projects. 
                Proficient in Node.js, React.js, and RESTful APIs. Certified in IBM DevOps and AWS Cloud Foundations (NSDC). 
                Eager to contribute in an entry-level IT role and grow within a collaborative tech team.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-lg font-bold text-[#1a4b8c] border-b border-gray-200 pb-1 mb-4 uppercase tracking-widest font-sans">Work Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-[17px] font-bold text-gray-900">Software Developer Intern</h4>
                  </div>
                  <div className="flex justify-between items-baseline text-sm italic text-gray-600 mb-3 font-sans">
                    <p className="font-bold text-[#1a4b8c]">Kenmerk Softwares Pvt Ltd</p>
                    <p className="font-semibold">Dec 2025 – Mar 2026</p>
                  </div>
                  <ul className="text-[14px] text-gray-700 space-y-2 ml-4 list-disc">
                    <li>Built production-ready features using Node.js and React.js in agile sprint cycles.</li>
                    <li>Delivered client projects: ERP system, online education platform UI, and car pooling app.</li>
                    <li>Designed mobile application UI focused on usability and responsive layout.</li>
                    <li>Built and integrated RESTful APIs improving application performance and reliability.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-bold text-[#1a4b8c] border-b border-gray-200 pb-1 mb-4 uppercase tracking-widest font-sans">Education</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-[17px] font-bold text-gray-900 italic underline decoration-blue-100 decoration-4 underline-offset-4">Master of Computer Applications (MCA)</h4>
                  </div>
                  <div className="flex justify-between items-baseline text-sm italic text-gray-600 font-sans">
                    <p className="font-bold text-[#1a4b8c]">FISAT – Federal Institute of Science And Technology</p>
                    <p className="font-semibold">2024 – Present</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 font-sans">Coursework: Computer Networks, DBMS, Data Structures & Algorithms</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-[17px] font-bold text-gray-900">B.Sc. Computer Science</h4>
                  </div>
                  <div className="flex justify-between items-baseline text-sm italic text-gray-600 font-sans">
                    <p className="font-bold text-[#1a4b8c]">LISSAH College, Calicut University</p>
                    <p className="font-semibold">2021 – 2024</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 font-sans">CGPA: 6.1</p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-2">
                    <div className="border-l-2 border-gray-100 pl-4">
                        <h4 className="text-xs font-bold uppercase text-[#1a4b8c] font-sans">12th – Bio Science</h4>
                        <p className="text-[13px] font-bold text-gray-900 mb-0.5">GHSS Meenangadi</p>
                        <p className="text-[11px] text-gray-600 italic font-sans">(2019-2021) • Score: 87%</p>
                    </div>
                    <div className="border-l-2 border-gray-100 pl-4">
                        <h4 className="text-xs font-bold uppercase text-[#1a4b8c] font-sans">10th – Kerala State Board</h4>
                        <p className="text-[13px] font-bold text-gray-900 mb-0.5">ST Joseph's EHSS</p>
                        <p className="text-[11px] text-gray-600 italic font-sans">(2018-2019)</p>
                    </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-lg font-bold text-[#1a4b8c] border-b border-gray-200 pb-1 mb-4 uppercase tracking-widest font-sans">Projects</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-md font-bold text-gray-900 mb-0.5 uppercase">BOOKCYCLE – Circular Economy for Books</h4>
                  <p className="text-[11px] font-bold text-[#1a4b8c] mb-3 italic font-sans">Next.js • Node.js • Express.js • MongoDB <span className="text-gray-400 font-normal ml-2">Aug – Oct 2025</span></p>
                  <ul className="text-[14px] text-gray-700 list-disc ml-4 space-y-1">
                    <li>Full-stack book buy/sell/rent platform aligned with SDG 4 and SDG 12.</li>
                    <li>Scalable MERN architecture with auth, listings, rental system, and responsive UI.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-bold text-gray-900 mb-0.5 uppercase">Inventory Forecasting System</h4>
                  <p className="text-[11px] font-bold text-[#1a4b8c] mb-3 italic font-sans tracking-tight">Personal Project</p>
                  <ul className="text-[14px] text-gray-700 list-disc ml-4 space-y-1">
                    <li>End-to-end forecasting tool covering UI design through backend logic.</li>
                    <li>Data-driven stock predictions to optimize inventory management.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-bold text-gray-900 mb-0.5 uppercase tracking-tighter">PAW – Pet Service & Shopping Platform</h4>
                  <p className="text-[11px] font-bold text-[#1a4b8c] mb-3 italic font-sans">React • JavaScript • HTML • CSS • MySQL</p>
                  <ul className="text-[14px] text-gray-700 list-disc ml-4 space-y-1">
                    <li>Responsive pet services app with grooming bookings and product purchases.</li>
                    <li>React frontend with MySQL backend; earlier PHP version with full CRUD.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Certifications Detail */}
            <section>
              <h3 className="text-lg font-bold text-[#1a4b8c] border-b border-gray-200 pb-1 mb-4 uppercase tracking-widest font-sans">Certifications</h3>
              <ul className="text-[13px] text-gray-700 space-y-3 font-sans list-none">
                <li className="flex gap-2"><span>•</span> <span><strong>DevOps Fundamentals</strong> — IBM Developer Skills Network (Mar 2026)</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>AWS Academy Cloud Foundations</strong> — NSDC (2025)</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>Intelligent Virtual Agents with IBM watsonx Assistant</strong> (2024)</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>IBM watsonx.ai Technical Essentials</strong> (2024)</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>AI for Beginners</strong> — UL Research Centre & OSPF (2023–2024)</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>CCSA</strong> — RedTeam Academy</span></li>
              </ul>
            </section>

          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Resume;
