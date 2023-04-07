import React  from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss';
import SliderImg from '../../assets/img/slider_background.jpg'
import { MdOutlineCastForEducation, MdLibraryBooks } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function Slider() {
  return (
    <div>
      <div className='container'>
        <div className='main-card'>
          <div className='card'>
            <span><MdOutlineCastForEducation  className='banner-icons' /></span>
            <div className='banner-content'>
              <h4 >Online Courses</h4>
              <a href="courses.html" class="hero_box_link">view more</a>
            </div>
          </div>
          <div className='card'>
            <span>  <MdLibraryBooks className='banner-icons' /></span>
            <div className='banner-content'>
              <h4 >Our Library</h4>
              <a href="courses.html" class="hero_box_link">view more</a>
            </div>
          </div>
          <div className='card'>
            <span>  <GiTeacher className='banner-icons'  /></span>
            <div className='banner-content'>
              <h4 >Our Teachers</h4>
              <a href="courses.html" class="hero_box_link">view more</a>
            </div>
          </div>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className='slider-size'>
            <div className='animation' data-aos="zoom-out-up">
              Get your <span>Education</span> today!
            </div>

            <img
              className="d-block w-100 cdm"
              src={SliderImg}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>



        <Carousel.Item>
          <div className='slider-size'>
            <div className='animation' data-aos="zoom-out-up">
              Get your <span>Education</span> today!
            </div>
            <img
              className="d-block w-100 cdm"
              src={SliderImg}
              alt="Second slide"
            />
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className='slider-size'>
            <div className='animation' data-aos="zoom-out-up">
              Get your <span>Education</span> today!
            </div>
            <img
              className="d-block w-100 cdm"
              src={SliderImg}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>


    </div>
  )
}


export default Slider