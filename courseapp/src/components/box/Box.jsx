import React from 'react'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Box() {
  return (
    <div>
      <div className="hero_boxes">
        <div className="hero_boxes_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 hero_box_col" data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
                <div className="hero_box d-flex flex-row align-items-center justify-content-start" >
                  <img
                    className='box-icons'
                    src="../../../images/earth-globe.svg"
                    alt="box"
                  />
                  <div className="hero_box_content">
                    <h2 className="hero_box_title">Online Courses</h2>
                    <Link className="hero_box_link" to="/about">view more</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 hero_box_col" data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
                <div className="hero_box d-flex flex-row align-items-center justify-content-start" >
                  <img
                    className='box-icons'
                    src="../../../images/books.svg"
                    alt="box"
                  />
                  <div className="hero_box_content">
                    <h2 className="hero_box_title">Our Library</h2>
                    <Link className="hero_box_link" to="/about">view more</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 hero_box_col" data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom" data-aos-duration="1600">
                <div className="hero_box d-flex flex-row align-items-center justify-content-start" >
                  <img
                    className='box-icons'
                    src="../../../images/professor.svg"
                    alt="box"
                  />
                  <div className="hero_box_content">
                    <h2 className="hero_box_title">Our Teachers</h2>
                    <Link className="hero_box_link" to="/about">view more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Box;