import React from 'react'
import Title from '../title/Title'
import Carousel from 'react-bootstrap/Carousel';


function Student() {
    return (
        <div>
            <div className="testimonials page_section">

                <div className="testimonials_background_container prlx_parent">
                    <div>
                        <img
                            className="testimonials_background prlx cmn"
                            src="../../../images/testimonials_background.jpg.webp"
                            alt="student"
                        />
                    </div>
                </div>
                <div className="container">
                    <Title />
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="testimonials_slider_container">

                                <div className="owl-carousel owl-theme testimonials_slider">
                                    <Carousel>
                                        <Carousel.Item>
                                            <div className="owl-item">
                                                <div className="testimonials_item text-center">
                                                    <div className="quote">“</div>
                                                    <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                        tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                                                        gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                                                        malesuada, finibus tortor fermentum.</p>
                                                    <div className="testimonial_user">
                                                        <div className="testimonial_image mx-auto">
                                                            <img
                                                                src="../../../images/testimonials_user.jpg.webp"
                                                                alt="student"
                                                            />
                                                        </div>
                                                        <div className="testimonial_name">james cooper</div>
                                                        <div className="testimonial_title">Graduate Student</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <div className="owl-item">
                                                <div className="testimonials_item text-center">
                                                    <div className="quote">“</div>
                                                    <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                        tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                                                        gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                                                        malesuada, finibus tortor fermentum.</p>
                                                    <div className="testimonial_user">
                                                        <div className="testimonial_image mx-auto">
                                                            <img
                                                                src="../../../images/testimonials_user.jpg.webp"
                                                                alt="student"
                                                            />
                                                        </div>
                                                        <div className="testimonial_name">james cooper</div>
                                                        <div className="testimonial_title">Graduate Student</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="owl-item">
                                                <div className="testimonials_item text-center">
                                                    <div className="quote">“</div>
                                                    <p className="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                        tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                                                        gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                                                        malesuada, finibus tortor fermentum.</p>
                                                    <div className="testimonial_user">
                                                        <div className="testimonial_image mx-auto">
                                                            <img
                                                                src="../../../images/testimonials_user.jpg.webp"
                                                                alt="student"
                                                            />
                                                        </div>
                                                        <div className="testimonial_name">james cooper</div>
                                                        <div className="testimonial_title">Graduate Student</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Student;