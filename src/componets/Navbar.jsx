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
    "px-4 py-2 transition-all duration-300 rounded-lg hover:bg-white/10"

  const active =
    "text-white font-semibold bg-white/20 border-b-2 border-white"

  return (
    <nav className={`w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-black shadow-md'
    } text-white fixed top-0 z-50`}>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white hover:scale-105 transition-transform duration-300">
          Abhinand
        </h1>

        {/* Links - Desktop */}
        <ul className="hidden md:flex gap-4 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-400"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-400"}`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-400"}`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-400"}`
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/certification"
              className={({isActive})=>
              `${base} ${isActive ? active:"hover:text-grey-300"}`}>
                Certification
              </NavLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'translate-y-0'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}></span>
          </div>
        </button>

      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col py-4 px-6 space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "hover:text-gray-300"} block w-full text-left`
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
                  `${base} ${isActive ? active : "hover:text-gray-300"} block w-full text-left`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : "hover:text-gray-300"} block w-full text-left`
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
                  `${base} ${isActive ? active : "hover:text-gray-300"} block w-full text-left`
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
                `${base} ${isActive ? active:"hover:text-gray-400"} block w-full text-left`}
                onClick={() => setIsMenuOpen(false)}
              >
                Certification
              </NavLink>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar
