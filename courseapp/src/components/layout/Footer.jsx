import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import ContactInfo from '../contactInfo/ContactInfo';
import { Link } from 'react-router-dom';





function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">

                    <div className="newsletter">
                        <div className="row">
                            <div className="col">
                                <div className="section_title text-center">
                                    <h1>Subscribe to newsletter</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <div className="newsletter_form_container mx-auto">
                                    <form action="https://preview.colorlib.com/theme/course/post">
                                        <div
                                            className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
                                            <input id="newsletter_email" className="newsletter_email" type="email" placeholder="Email Address"
                                                required="required" data-error="Valid email is required." />
                                            <button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300"
                                                value="Submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_content">
                        <div className="row">

                            <div className="col-lg-3 footer_col">

                                <div className="logo_container">
                                    <div className="logo">

                                        <img src="./images/logo.png.webp" alt="" />
                                        <span>course</span>
                                    </div>
                                </div>
                                <p className="footer_about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor
                                    nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
                            </div>

                            <div className="col-lg-3 footer_col">
                                <div className="footer_column_title">Menu</div>
                                <div className="footer_column_content">
                                    <ul>
                                        <li className="footer_list_item"><Link to='/'>Home</Link></li>
                                        <li className="footer_list_item"><Link to='/about'>About Us</Link></li>
                                        <li className="footer_list_item"><Link to='/course'>Courses</Link></li>
                                        <li className="footer_list_item"><Link to='/news'>News</Link></li>
                                        <li className="footer_list_item"><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 footer_col">
                                <div className="footer_column_title">Usefull Links</div>
                                <div className="footer_column_content">
                                    <ul>
                                        <li className="footer_list_item"><Link >Testimonials</Link></li>
                                        <li className="footer_list_item"><Link to='/faq'>FAQ</Link></li>
                                        <li className="footer_list_item"><Link >Community</Link></li>
                                        <li className="footer_list_item"><Link >Campus Pictures</Link></li>
                                        <li className="footer_list_item"><Link >Tuitions</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 footer_col">
                                <div className="footer_column_title">Contact</div>
                               <ContactInfo/>
                            </div>
                        </div>
                    </div>

                    <div className="footer_bar d-flex flex-column flex-sm-row align-items-center">
                        <div className="footer_copyright">
                            <span>
                                Copyright &copy;
                                <script data-cfasync="false"
                                    src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                                <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                                with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to='https://github.com/SadiqNahmetov'
                                    target="_blank">Sadig Nahmatov</Link>
                            </span>
                        </div>
                        <div className="footer_social ml-sm-auto">
                            <ul className="menu_social">
                                <li className="menu_social_item"><Link to="https://www.linkedin.com/in/sadig-nahmatov-a320b5264"><FiLinkedin className="fab" /></Link></li>
                                <li className="menu_social_item"><Link ><FiInstagram className="fab" /></Link></li>
                                <li className="menu_social_item"><Link ><FiFacebook className="fab" /></Link></li>
                                <li className="menu_social_item"><Link ><FiTwitter className="fab" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;