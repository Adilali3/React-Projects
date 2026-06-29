import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Search from './Components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto max-w-92.5'>
     <Navbar />
    </div>
    <Search />
    </>
  )
}

export default App
