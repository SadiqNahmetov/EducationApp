import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Slider.scss';
import Carousel from 'react-bootstrap/Carousel';
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
          slider.map((slider, sliderIndex) => {
            return (
              <Carousel.Item  key={sliderIndex}>
                <div className='slider'>
                  <div className='animation'
                   data-aos="zoom-in-up"
                   dangerouslySetInnerHTML={{__html: slider.title}}
                  ></div>

                  <img
                    className="d-block w-100 cdm"
                    src={`data:image/jpeg;base64, ${slider.image}`} 
                    alt="Second slide"
                  />
                  
                </div>
              </Carousel.Item>
            )
          })
        }
      </Carousel>


    </div>
  )
}


export default Slider;