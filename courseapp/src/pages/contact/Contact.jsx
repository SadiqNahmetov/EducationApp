import React from 'react'
import '../../assets/styles/Contact.css';
import Header from '../../components/header/Header';
import ContactInfo from '../../components/contactInfo/ContactInfo';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
function Contact() {
    return (
        <>
        <Navbar />
            <Header />
            <div className="contact">
                <div className="container" style={{maxWidth:"1200px"}}>
                    <div className="row">
                        <div className="col-lg-8">

                            <div className="contact_form">
                                <div className="contact_title">Get in touch</div>
                                <div className="contact_form_container">
                                    <form action="https://preview.colorlib.com/theme/course/post">
                                        <input id="contact_form_name" className="input_field contact_form_name" type="text" placeholder="Name"
                                            required="required" data-error="Name is required." />
                                        <input id="contact_form_email" className="input_field contact_form_email" type="email"
                                            placeholder="E-mail" required="required" data-error="Valid email is required." />
                                        <textarea id="contact_form_message" className="text_field contact_form_message" name="message"
                                            placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                        <button id="contact_send_btn" type="button" className="contact_send_btn trans_200" value="Submit">send
                                            message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about">
                                <div className="about_title">Join Courses</div>
                                <p className="about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl
                                    ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius
                                    luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus.</p>
                               
                                <ContactInfo />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div id="google_map">
                                <div className="map_container">
                                    <div id="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156554.33270855236!2d49.6516372713882!3d40.413620023928175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1681383164449!5m2!1sen!2saz" 
                                       style={{width:"100%", height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
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

export default Contact;