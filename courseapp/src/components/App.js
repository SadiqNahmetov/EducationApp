import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/home/Home';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import About from '../pages/about/About';



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
      </Routes>

        <Footer />
    </div>
  );
}

export default App;
