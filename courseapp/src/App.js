import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/about/About'
import Course from './pages/course/Course';
import News  from "./pages/news/News";
import Contact from "./pages/contact/Contact";



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/course" element={<Course />} />
        <Route  path="/news" element={<News />} />
        <Route  path="/contact" element={<Contact />} />



      </Routes>

        <Footer />
    </div>
  );
}

export default App;
