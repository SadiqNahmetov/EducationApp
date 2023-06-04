import React from 'react';
import '../../assets/styles/About.css';
import Header from '../../components/header/Header'
import AboutUs from '../../components/aboutUs/AboutUs'
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

function About() {
  return (
    <div>
      <Navbar />

      <Header />
      <AboutUs />
       <Footer />
    </div>
  )
}

export default About