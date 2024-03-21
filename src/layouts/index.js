import React from "react";
import WhatsAppButton from "./btnsoporte/WhatsAppButton";
import Encuesta from "./encuesta/Encuesta";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./login/login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/encuesta" element={<Encuesta />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
