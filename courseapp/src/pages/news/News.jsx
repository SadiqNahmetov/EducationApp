import React from 'react';
import '../../assets/styles/News.css';
import Header from '../../components/header/Header'
import Blog from '../../components/blog/Blog'
import Archive from '../../components/archive/Archive';
import Latest from '../../components/latestPosts/LatestPost';
import Tag from '../../components/tag/Tag';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';


function News() {
  return (
    <>
      <Navbar />
      <Header />

      <div className="news">
        <div className="container">
          <div className="row">

            <div className="col-lg-8">
              <div className="news_posts">

                <Blog />
                <Blog />
                <Blog />


              </div>

              <div className="news_page_nav">
                <ul>
                  <li className="active text-center trans_200"><a href="#">01</a></li>
                  <li className="text-center trans_200"><a href="#">02</a></li>
                  <li className="text-center trans_200"><a href="#">03</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">

                <div className="sidebar_section">
                  <div className="sidebar_section_title">
                    <h3>Archives</h3>

                  </div>
                  <Archive />
                </div>

                <div className="sidebar_section">
                  <div className="sidebar_section_title">
                    <h3>Latest posts</h3>
                  </div>
                  <Latest />
                  <Latest />
                  <Latest />

                </div>

                <div className="sidebar_section">
                  <div className="sidebar_section_title">
                    <h3>Tags</h3>
                  </div>
                 <Tag/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default News;