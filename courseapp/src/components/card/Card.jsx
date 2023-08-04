import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Card() {

  const url = 'https://localhost:7184';

  const [course, setCourse] = useState([]);

  const getAllCourse = async () => {
    await axios.get(`${url}/api/Course/GetAll`)
      .then((res) => {
        setCourse(res.data);
      });
  }
  useEffect(() => {
    getAllCourse();
    console.log(course);
  })

  return (
    <div className="popular page_section" data-aos="fade-up"
      data-aos-duration="1200">
      <div className="container">
        <div className="row course_boxes">
          {
            course.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 course_box">
                  <div className="card">
                    <img className="card-img-top" src={`data:image/png;base64,${item.image}`} alt="" />
                    <div className="card-body text-center">
                      <div className="card-title"><a href="courses.html">{item.title}</a></div>
                      <div className="card-text">{item.description}</div>
                    </div>
                    <div className="price_box d-flex flex-row align-items-center">
                      <div className="course_author_image">
                        <img src="./images/author.jpg.webp" alt="" />
                      </div>
                      <div className="course_author_name">Michael Smith, <span>Author</span></div>
                      <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>${item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default Card;








