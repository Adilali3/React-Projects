/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';


function Navbar() {
  return (
    <div >
      <nav className="flex justify-between items-center px-4 py-1 bg-black">
        <div>
          <Link to="/" > 
            <img src={logo} className="h-12 w-12 rounded-full object-cover" alt="Logo" />
           </Link>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <NavLink to="/BrandPage"
              className={({isActive})=>{
                return isActive ? "text-orange-700" : "text-white"
              }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
              className={({isActive})=>{
                return isActive ? "text-orange-700" : "text-white"
              }}>
                About
              </NavLink>
            </li>
             <li>
              <NavLink to="/all-models"
              className={({isActive})=>{
                return isActive ? "text-orange-700" : "text-white"
              }}>
                All Models
              </NavLink>
            </li>
             <li>
              <NavLink to="/electric"
              className={({isActive})=>{
                return isActive ? "text-orange-700" : "text-white"
              }}>
                Electric
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
