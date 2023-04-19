import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Course from './pages/course/Course';
import News  from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";




function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route  path="/" element={<Home />} />
        
        <Route  path="/course" element={<Course />} />
        <Route  path="/news" element={<News />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/about" element={<About />} />

      



      </Routes>

        <Footer />
    </div>
  );
}

export default App;
