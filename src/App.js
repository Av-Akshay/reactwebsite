import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contect from "./Contect";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
