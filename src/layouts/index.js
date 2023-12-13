import React from 'react'
import WhatsAppButton from './btnsoporte/WhatsAppButton'
import Encuesta from './encuesta/Encuesta'
import Footer from './footer/Footer'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/encuesta" element={<Encuesta/>}/>
    </Routes>

   <WhatsAppButton />
   <Footer/>
    </>
  )
}

export default App