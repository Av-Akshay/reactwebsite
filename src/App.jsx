import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contect from './Contect';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contect' element={<Contect />} />
        <Route exact path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
