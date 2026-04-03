import React from "react"
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa"
import { SiCredly } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] text-gray-600 border-t border-gray-100">

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        {/* Name */}
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Abhinand N R
        </h2>

        {/* Social Icons */}
        <div className="flex gap-8 text-2xl">

          <a
            href="https://github.com/AbhinandNR"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/abhinandnr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.hackerrank.com/profile/abhinand_nr12"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 hover:scale-110 transition"
          >
            <FaHackerrank />
          </a>

          <a
            href="https://www.credly.com/users/abhinandnr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 hover:scale-110 transition"
          >
            <SiCredly />
          </a>

          <a
            href="mailto:abhinandnr1@gmail.com"
            className="hover:text-red-400 hover:scale-110 transition"
          >
            <HiOutlineMail />
          </a>

        </div>

        {/* Bottom text */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Abhinand N R 
        </p>

      </div>
    </footer>
  )
}

export default Footer
