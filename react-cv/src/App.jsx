import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Section1 from "./components/Section1/Section1.jsx";
import Section2 from "./components/Section2/Section2.jsx";
import Section3 from "./components/Section3/Section3.jsx";
import Section4 from "./components/Section4/Section4.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Section1 />} /> {/* La sección 1 es la principal */}
        <Route path="/about" element={<Section2 />} />
        <Route path="/skills" element={<Section3 />} />
        <Route path="/resume" element={<Section4 />} />
      </Routes>
      <Footer /> {/* Renderiza el footer */}
    </BrowserRouter>
  </React.StrictMode>
);
