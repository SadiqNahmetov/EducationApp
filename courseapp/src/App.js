import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register"
import SliderTable from "./pages/admin/slider/SliderTable";
import SliderCreate from "./pages/admin/slider/SliderCreate";
import Dashboard from "./pages/admin/Dashboard";
import SliderUpdate from "./pages/admin/slider/SliderUpdate";
import HeaderTable from "./pages/admin/header/HeaderTable";
import HeaderCreate from "./pages/admin/header/HeaderCreate";
import HeaderUpdate from "./pages/admin/header/HeaderUpdate";
import AboutTable from "./pages/admin/about/AboutTable";
import AboutCreate from "./pages/admin/about/AboutCreate";
import AboutUpdate from "./pages/admin/about/AboutUpdate";
import BannerTable from "./pages/admin/banner/BannerTable";
import BannerCreate from "./pages/admin/banner/BannerCreate";



function App() {

  

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/course" element={<Course />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/sliderTable" element={<SliderTable />} />
        <Route path="/sliderCreate" element={<SliderCreate />} />
        <Route path="/sliderUpdate/:id" element={<SliderUpdate />} />
        
        <Route path="/headerTable" element={<HeaderTable />} />
        <Route path="/headerCreate" element={<HeaderCreate />} />
        <Route path="/headerUpdate/:id" element={<HeaderUpdate />} />

        <Route path="/aboutTable" element={<AboutTable />} />
        <Route path="/aboutCreate" element={<AboutCreate />} />
        <Route path="/aboutUpdate/:id" element={<AboutUpdate />} />

        <Route path="/bannerTable" element={<BannerTable />} />
        <Route path="/bannerCreate" element={<BannerCreate />} />

        



      </Routes>

    </div>
  );
}

export default App;
