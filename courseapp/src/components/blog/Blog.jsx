import React from 'react'

function Blog() {
  return (
   
        <div className="news_post">

                <div className="news_post_image">
                  <img src="../../../images/blog/blog_1.jpg" alt="blog"/>
                </div>
                <div className="news_post_top d-flex flex-column flex-sm-row">
                  <div className="news_post_date_container">
                    <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                      <div>18</div>
                      <div>dec</div>
                    </div>
                  </div>
                  <div className="news_post_title_container">
                    <div className="news_post_title">
                      <a href="news_post.html">Why do you need a qualification?</a>
                    </div>
                    <div className="news_post_meta">
                      <span className="news_post_author"><a href="#">By Christian Smith</a></span>
                      <span>|</span>
                      <span className="news_post_comments"><a href="#">3 Comments</a></span>
                    </div>
                  </div>
                </div>
                <div className="news_post_text">
                  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc.
                    Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius luctus. Praesent
                    finibus risus facilisis ultricies.</p>
                </div>
                <div className="news_post_button text-center trans_200">
                  <a href="news_post.html">Read More</a>
                 
                </div>
              </div>
    
  )
}

export default Blog;