import React from 'react';
import { Link } from "react-router-dom";
import {  FiPhoneCall } from "react-icons/fi";

function MyNavbar() {

  return (
    <>
      <header className="header d-flex flex-row">
        <div className="header_content d-flex flex-row align-items-center">

          <div className="logo_container">
            <div className="logo">
              <img src="./images/logo.png.webp" alt="" />
              <span>course</span>
            </div>
          </div>

          <nav className="main_nav_container">
            <div className="main_nav">
              <ul className="main_nav_list">
                <li className="main_nav_item"> <Link className="navColor" to="/">Home</Link></li>
                <li className="main_nav_item">  <Link className="navColor" to="/about">About Us</Link></li>
                <li className="main_nav_item">  <Link className="navColor" to="/course">Courses</Link></li>
                <li className="main_nav_item">  <Link className="navColor" to="/about">Elements</Link></li>
                <li className="main_nav_item">  <Link className="navColor" to="/news">News</Link></li>
                <li className="main_nav_item">  <Link className="navColor" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header_side d-flex flex-row justify-content-center align-items-center">
          <FiPhoneCall size="30px" color='#fff' />
          <span>+43 4566 7788 2457</span>
        </div>

        <div className="hamburger_container">
          <i className="fas fa-bars trans_200"></i>
        </div>
      </header>
    </>
  )
}

export default MyNavbar;
