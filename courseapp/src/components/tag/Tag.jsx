import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Tag() {
    return (
        <div>

            <div className="tags d-flex flex-row flex-wrap" data-aos="fade-up" data-aos-duration="1400">
                <div className="tag"><a href="#">Course</a></div>
                <div className="tag"><a href="#">Design</a></div>
                <div className="tag"><a href="#">FAQ</a></div>
                <div className="tag"><a href="#">Teachers</a></div>
                <div className="tag"><a href="#">School</a></div>
                <div className="tag"><a href="#">Graduate</a></div>
            </div>
        </div>
    )
}

export default Tag;