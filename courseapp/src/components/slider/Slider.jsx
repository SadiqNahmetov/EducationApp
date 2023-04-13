import React  from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function Slider() {
  return (
    <div>
     
      <Carousel>
        <Carousel.Item>
          <div className='slider'>
            <div className='animation' data-aos="zoom-out-up">
              Get your <span>Education</span> today!
            </div>

            <img
              className="d-block w-100 cdm"
              src="../../../images/slider_background.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>



        <Carousel.Item>
          <div className='slider'>
            <div className='animation' data-aos="zoom-out-up">
              Get your <span>Education</span> today!
            </div>
            <img
              className="d-block w-100 cdm"
              src="../../../images/slider_background.jpg"
              alt="Second slide"
            />
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className='slider'>
            <div className='animation' data-aos="zoom-out-up">
              Get your <span>Education</span> today!
            </div>
            <img
              className="d-block w-100 cdm"
              src="../../../images/slider_background.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>


    </div>
  )
}


export default Slider;