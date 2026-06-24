/* eslint-disable no-unused-vars */
import React from 'react'
import car from '../assets/car.jpg'

function Body() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center"
    style={{backgroundImage:`url(${car})`}}>
      <div className="shadow-lg space-y-4">
        <h1 className="text-left text-5xl font-bold text-gray-500" style={{textShadow: '3px 2px 4px rgba(0, 0.3, 0.5, 0.9)'}}>Born on the racetrack and refined for the street</h1>
        <h2 className=" text-left text-xl font-semibold text-gray-500" style={{textShadow: '3px 2px 4px rgba(0, 0.3, 0.5, 0.9)'}}>the BMW M series represents the pinnacle of motorsport engineering.</h2> 
        <h2 className=" text-left text-xl font-semibold text-gray-500" style={{textShadow: '3px 2px 4px rgba(0, 0.3, 0.5, 0.9)'}}>High-performance powertrains, adaptive suspension systems, and aerodynamic body styling deliver heart-racing acceleration</h2>
        <h2 className=" text-left text-xl font-semibold text-gray-500" style={{textShadow: '3px 2px 4px rgba(0, 0.3, 0.5, 0.9)'}}>This is pure, unadulterated driving passion, built for those who refuse to blend in.</h2>
      </div>
    </div>
  )
}

export default Body
