import React from 'react'
import WhatsAppButton from './btnsoporte/WhatsAppButton'
import Footer from './footer/Footer'
import Home from './home/Home'
import Navbar from './navbar/Navbar'

function App() {
  return (
    <>
    <Navbar/>
   <Home/>
   <WhatsAppButton />
   <Footer/>
    </>
  )
}

export default App