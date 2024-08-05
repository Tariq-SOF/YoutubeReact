import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Componts/Homepage'
import Tariq from './Componts/Tariq'
import { Routes, Route } from "react-router-dom";
import Next from './Componts/Next'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
 <Routes> 
       
        <Route path="/" element={<Homepage />} />
        <Route path="Next/:id" element={<Next />} />
  </Routes>

    {/* <Homepage/>
    <Tariq/> */}
    </>
  )
}

export default App
