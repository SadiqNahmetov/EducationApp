import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import {SlBasket} from 'react-icons/sl'



function Navbar() {

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
                <li className="main_nav_item"> <Link to="/">Home</Link></li>
                <li className="main_nav_item">  <Link  to="/about">About Us</Link></li>
                <li className="main_nav_item">  <Link  to="/course">Courses</Link></li>
                <li className="main_nav_item">  <Link  to="/news">News</Link></li>
                <li className="main_nav_item">  <Link  to="/contact">Contact</Link></li>

              </ul>
            </div>
          </nav>
        </div>
        <div className="header_side d-flex flex-row justify-content-center align-items-center">
        <Dropdown>
          <Dropdown.Toggle className='btn btn-light' id="dropdown-basic">
            My Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item ><Link className='colorLogin' to ="">Username</Link></Dropdown.Item>
            <Dropdown.Item ><Link className='colorLogin' to ="/login">Login</Link></Dropdown.Item>
            <Dropdown.Item ><Link className='colorLogin' to ="/register">Register</Link></Dropdown.Item>
            <Dropdown.Item ><Link className='colorLogin' to ="">Logout</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
       <Link to="basket"> <SlBasket  className='basket-icon'/></Link>
        </div>

        <div className="hamburger_container">
          <i className="fas fa-bars trans_200"></i>
        </div>
      </header>
    </>
  )
}

export default Navbar;
