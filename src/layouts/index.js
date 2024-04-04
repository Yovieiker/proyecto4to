import React from "react";
import WhatsAppButton from "./btnsoporte/WhatsAppButton";
import Encuesta from "./encuesta/Encuesta";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./login/login";
import { PrivateRoute } from "./PrivateRoute";
import { useState } from "react";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const idCheckout = localStorage.getItem("idCheckout");

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route index element={<Home />} />
        <Route element={<PrivateRoute token={token} idCheckout={idCheckout} />}>
          <Route path="/encuesta" element={<Encuesta />} />
        </Route>
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
