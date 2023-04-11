import React from 'react'
import Title from '../title/Title'
import Carousel from 'react-bootstrap/Carousel';


function Student() {
    return (
        <div>
            <div class="testimonials page_section">

                <div class="testimonials_background_container prlx_parent">
                    <div>
                        <img
                            className="testimonials_background prlx cmn"
                            src="../../../images/testimonials_background.jpg.webp"
                            alt="student"
                        />
                    </div>
                </div>
                <div class="container">
                    <Title />
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="testimonials_slider_container">

                                <div class="owl-carousel owl-theme testimonials_slider">
                                    <Carousel>
                                        <Carousel.Item>
                                            <div class="owl-item">
                                                <div class="testimonials_item text-center">
                                                    <div class="quote">“</div>
                                                    <p class="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                        tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                                                        gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                                                        malesuada, finibus tortor fermentum.</p>
                                                    <div class="testimonial_user">
                                                        <div class="testimonial_image mx-auto">
                                                            <img
                                                                src="../../../images/testimonials_user.jpg.webp"
                                                                alt="student"
                                                            />
                                                        </div>
                                                        <div class="testimonial_name">james cooper</div>
                                                        <div class="testimonial_title">Graduate Student</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <div class="owl-item">
                                                <div class="testimonials_item text-center">
                                                    <div class="quote">“</div>
                                                    <p class="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                        tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                                                        gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                                                        malesuada, finibus tortor fermentum.</p>
                                                    <div class="testimonial_user">
                                                        <div class="testimonial_image mx-auto">
                                                            <img
                                                                src="../../../images/testimonials_user.jpg.webp"
                                                                alt="student"
                                                            />
                                                        </div>
                                                        <div class="testimonial_name">james cooper</div>
                                                        <div class="testimonial_title">Graduate Student</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div class="owl-item">
                                                <div class="testimonials_item text-center">
                                                    <div class="quote">“</div>
                                                    <p class="testimonials_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
                                                        tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a
                                                        gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                                                        malesuada, finibus tortor fermentum.</p>
                                                    <div class="testimonial_user">
                                                        <div class="testimonial_image mx-auto">
                                                            <img
                                                                src="../../../images/testimonials_user.jpg.webp"
                                                                alt="student"
                                                            />
                                                        </div>
                                                        <div class="testimonial_name">james cooper</div>
                                                        <div class="testimonial_title">Graduate Student</div>
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