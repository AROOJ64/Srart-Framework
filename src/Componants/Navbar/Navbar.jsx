import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-[#1abc9c] px-4 py-2 rounded-md"
      : "hover:text-[#1abc9c]"

  return (
    <nav className="bg-[#2c3e50] text-white">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between">
        
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          START FRAMEWORK
        </NavLink>

        <ul className="flex gap-6 text-sm font-bold">
          <li>
            <NavLink to="/about" className={linkClass}>
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className={linkClass}>
              PORTFOLIO
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={linkClass}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
