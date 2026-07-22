import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@mui/material/Button';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const container = useRef();
  
  useGSAP(() => {
    gsap.fromTo('.gsap-heading', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: '.gsap-heading', start: 'top 85%' } }
    );
    
    gsap.fromTo('.gsap-form',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: '.gsap-form', start: 'top 85%' } }
    );
  }, { scope: container });
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const subject = encodeURIComponent(`Portfolio Query from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:abhinandnr1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contacts"
      ref={container}
      className="
        py-12 md:py-20 px-4 md:px-6
        bg-white
        relative
        overflow-hidden
      "
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#34D399]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#4F8EF7]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2937] mb-4 tracking-tight gsap-heading">
          Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] to-[#A78BFA]">Amazing</span>
        </h2>

        <p className="text-gray-500 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto gsap-heading">
          Got a project idea or job opportunity? Feel free to reach out. I'm currently open for new opportunities.
        </p>

        {/* Glass Card */}
        <form
          onSubmit={handleSubmit}
          className="
            gsap-form
            backdrop-blur-xl
            bg-white
            border border-gray-100
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            rounded-3xl
            p-6 md:p-10
            space-y-4 md:space-y-6
            text-left
          "
        >

          {/* Inputs row */}
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="
                w-full
                bg-[#F9FAFB]
                border border-gray-200
                text-gray-900 placeholder-gray-400
                p-3 px-4 rounded-xl text-sm
                focus:ring-2 focus:ring-[#4F8EF7]/50 focus:border-[#4F8EF7]
                outline-none transition-all duration-300
              "
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="
                w-full
                bg-[#F9FAFB]
                border border-gray-200
                text-gray-900 placeholder-gray-400
                p-5 rounded-2xl
                focus:ring-2 focus:ring-[#4F8EF7]/50 focus:border-[#4F8EF7]
                outline-none transition-all duration-300
              "
            />

          </div>

          {/* Message */}
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message..."
            className="
              w-full
              bg-[#F9FAFB]
              border border-gray-200
              text-gray-900 placeholder-gray-400
              p-3 px-4 rounded-xl text-sm
              focus:ring-2 focus:ring-[#4F8EF7]/50 focus:border-[#4F8EF7]
              outline-none transition-all duration-300 resize-none
            "
          />

          {/* Button */}
          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #4F8EF7, #A78BFA)',
                color: 'white',
                px: { xs: 4, md: 6 },
                py: 1.5,
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s'
              }}
            >
              Send Message
            </Button>
          </div>

        </form>

        {/* Contact Info */}
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-500">
          <a href="mailto:abhinandnr1@gmail.com" className="flex items-center gap-3 hover:text-[#4F8EF7] transition-colors">
            <span className="text-2xl">📧</span> <span className="font-medium text-gray-700 tracking-wide">abhinandnr1@gmail.com</span>
          </a>
          <div className="hidden md:block w-2 h-2 rounded-full bg-gray-300"></div>
          <p className="flex items-center gap-3">
            <span className="text-2xl">📍</span> <span className="font-medium text-gray-700 tracking-wide">Kerala, India</span>
          </p>
        </div>

      </div>

    </section>
  )
}

export default Contact
