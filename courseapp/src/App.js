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
import Login from "./pages/account/Login";
import Register from "./pages/account/Register"




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
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />


      



      </Routes>

        <Footer />
    </div>
  );
}

export default App;
