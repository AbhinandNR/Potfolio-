import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const base =
    "px-4 py-2 transition-all duration-300 rounded-lg hover:bg-black/5"

  const active =
    "text-[#4F8EF7] font-semibold bg-[#4F8EF7]/10"

  return (
    <nav className={`w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100' 
        : 'bg-transparent'
    } text-gray-700 fixed top-0 z-50`}>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 hover:scale-105 transition-transform duration-300">
          Abhinand<span className="text-[#34D399]">.</span>
        </h1>

        {/* Links - Desktop */}
        <ul className="hidden md:flex gap-4 text-[15px] font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-900"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-900"}`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-900"}`
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-900"}`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-900"}`
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/certification"
              className={({isActive})=>
              `${base} ${isActive ? active:"hover:text-gray-900"}`}>
                Experience
              </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume"
              className={({isActive})=>
              `${base} ${isActive ? active:"hover:text-gray-900"}`}>
                Resume
              </NavLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'translate-y-0'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}></span>
          </div>
        </button>

      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col py-4 px-6 space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "hover:text-gray-900"} block w-full text-left`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "hover:text-gray-900"} block w-full text-left`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "hover:text-gray-900"} block w-full text-left`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "hover:text-gray-900"} block w-full text-left`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "hover:text-gray-900"} block w-full text-left`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/certification"
                className={({isActive})=>
                `${base} ${isActive ? active:"hover:text-gray-900"} block w-full text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resume"
                className={({isActive})=>
                `${base} ${isActive ? active:"hover:text-gray-900"} block w-full text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar
