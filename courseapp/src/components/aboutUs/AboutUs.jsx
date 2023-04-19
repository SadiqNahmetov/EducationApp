import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function AboutUs() {
  return (
    <div>

      <div className="about">
        <div className="container">
          <div className="row about_row row-lg-eq-height">
            <div className="col-lg-6">
              <div className="about_content" data-aos="zoom-in-up" data-aos-duration="1200">
                <div className="about_title">Our Platform's main goal</div>
                <div className="about_text" >
                  <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras
                    laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum
                    dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio
                    eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer id convallis libero, sed blandit nibh. Nam ultricies tristique
                    nibh, consequat ornare nibh. Quisque vitae odio ligula.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_image" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <img src="./images/about/about_1.jpg" alt="about" />
              </div>
            </div>
          </div>
          <div className="row about_row row-lg-eq-height">
            <div className="col-lg-6 order-lg-1 order-2">

              <div className="about_image"data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src="./images/about/about_1.jpg" alt="about" />

              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="about_content" data-aos="zoom-in-up" data-aos-duration="1200">
                <div className="about_title">eLearn's Vision</div>
                <div className="about_text" >
                  <p>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras
                    laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum
                    dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio
                    eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer id convallis libero, sed blandit nibh. Nam ultricies tristique
                    nibh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUs;