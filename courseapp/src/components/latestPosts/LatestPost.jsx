import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Latest() {
  return (
    <>
      
                <div className="latest_posts" data-aos="fade-up" data-aos-duration="1400">

                  <div className="latest_post">
                    <div className="latest_post_image">
                    <img src="../../../images/blog/blog_3.jpg" alt="blog"/>

                    </div>
                    <div className="latest_post_title"><a href="news_post.html">Why do you need a qualification?</a></div>
                    <div className="latest_post_meta">
                      <span className="latest_post_author"><a href="#">By Christian Smith</a></span>
                      <span>|</span>
                      <span className="latest_post_comments"><a href="#">3 Comments</a></span>
                    </div>
                  </div>
                  
                </div>
    </>
  )
}

export default Latest;