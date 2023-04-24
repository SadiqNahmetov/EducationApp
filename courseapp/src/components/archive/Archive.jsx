import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Archive() {
  return (
    <div>
       
                <ul className="sidebar_list" data-aos="fade-up" data-aos-duration="1400">
                  <li className="sidebar_list_item"><a href="#">Design Courses</a></li>
                  <li className="sidebar_list_item"><a href="#">All you need to know</a></li>
                  <li className="sidebar_list_item"><a href="#">Uncategorized</a></li>
                  <li className="sidebar_list_item"><a href="#">About Our Departments</a></li>
                  <li className="sidebar_list_item"><a href="#">Choose the right course</a></li>
                </ul>
    </div>
  )
}

export default Archive;