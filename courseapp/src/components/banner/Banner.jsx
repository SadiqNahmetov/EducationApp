import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Banner() {

  const url = 'https://localhost:7184';

  const [banner, setBanner] = useState([]);

  const getAllBanner = async () => {
    await axios.get(`${url}/api/Banner/GetAll`)
      .then((res) => {
        setBanner(res.data);
      });
  }

  useEffect(() => {
    getAllBanner();
  }, []);


  return (

    <div className="hero_boxes">
      <div className="hero_boxes_inner">
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div className="row">
            {
              banner.map((banner, index) => {
                return (
                  <div key={index} className="col-lg-4 hero_box_col" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                      <img className='svg box-icons' src={`data:image/svg+xml;base64, ${banner.image}`} alt="" />
                      <div className="hero_box_content">
                        <h2 className="hero_box_title">{banner.title}</h2>
                        <Link className='hero_box_link' to="/courses">View More</Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;



// import React from 'react'
// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();

// function Banner() {
//   return (
//     <div>
//       <div className="hero_boxes">
//         <div className="hero_boxes_inner">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-4 hero_box_col" data-aos="fade-up"
//                   data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
//                 <div className="hero_box d-flex flex-row align-items-center justify-content-start" >
//                   <img
//                     className='box-icons'
//                     src="../../../images/earth-globe.svg"
//                     alt="box"
//                   />
//                   <div className="hero_box_content">
//                     <h2 className="hero_box_title">Online Courses</h2>
//                     <Link className="hero_box_link" to="/about">view more</Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 hero_box_col" data-aos="fade-up"
//                   data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
//                 <div className="hero_box d-flex flex-row align-items-center justify-content-start" >
//                   <img
//                     className='box-icons'
//                     src="../../../images/books.svg"
//                     alt="box"
//                   />
//                   <div className="hero_box_content">
//                     <h2 className="hero_box_title">Our Library</h2>
//                     <Link className="hero_box_link" to="/about">view more</Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 hero_box_col" data-aos="fade-up"
//                   data-aos-anchor-placement="bottom-bottom" data-aos-duration="1600">
//                 <div className="hero_box d-flex flex-row align-items-center justify-content-start" >
//                   <img
//                     className='box-icons'
//                     src="../../../images/professor.svg"
//                     alt="box"
//                   />
//                   <div className="hero_box_content">
//                     <h2 className="hero_box_title">Our Teachers</h2>
//                     <Link className="hero_box_link" to="/about">view more</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Banner;