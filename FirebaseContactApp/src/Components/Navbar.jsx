import React from 'react'

function Navbar() {
  return (
    <>
    <div className='m-4 h-15 rounded-lg bg-white'>
      <div className='flex justify-center items-center'>
        <img src="/logo.avif" alt="logo" className='m-2 h-10 rounded-full '/>
        <h2 className='font-bold'>Firebase Contact App</h2>
      </div>
      <div>
        <input type="text"  />
      </div>
    </div>
    </>
  )
}

export default Navbar
