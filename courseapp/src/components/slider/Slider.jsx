import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss';
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function Slider() {
  const baseUrl = "https://localhost:7184";

  const [slider, setSlider] = useState([])


  async function getAllSlider() {

    await axios.get(`${baseUrl}/api/Slider/GetAll`)
      .then((res) => {
        return setSlider(res.data)
      })

  }

  useEffect(() => {
    getAllSlider()
  }, [])
  return (
    <div>

      <Carousel>
        {
          slider.map((item, sliderIndex) => {
            return (
              <Carousel.Item  key={sliderIndex}>
                <div className='slider'>
                  <div className='animation' data-aos="zoom-in-up"
                   dangerouslySetInnerHTML={{__html: item.title}}
                  ></div>

                  <img
                    className="d-block w-100 cdm"
                    src="./images/slider_background.jpg"
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
            )
          })
        }





         {/* <Carousel.Item>
          <div className='slider'>
            <div className='animation'data-aos="zoom-in-up">
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
            <div className='animation' data-aos="zoom-in-up">
              Get your <span>Education</span> today!
            </div>
            <img
              className="d-block w-100 cdm"
              src="../../../images/slider_background.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item> */}
      </Carousel>


    </div>
  )
}


export default Slider;