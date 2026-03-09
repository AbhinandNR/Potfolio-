import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const base =
    "px-4 py-2 transition"

  const active =
    "text-sky-300 font-semibold border-b-2 border-sky-300"

  return (
    <nav className="w-full bg-black text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Abhinand
        </h1>

        {/* Links */}
        <ul className="flex gap-4 text-lg">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-300"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-300"}`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-300"}`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${base} ${isActive ? active : "hover:text-gray-300"}`
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

      </div>

    </nav>
  )
}

export default Navbar
