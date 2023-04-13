import React from 'react'
import '../../assets/styles/Contact.css';
import Header from '../../components/header/Header';
import ContactInfo from '../../components/contactInfo/ContactInfo';
function Contact() {
    return (
        <>
            <Header />
            <div class="contact">
                <div class="container" style={{maxWidth:"1200px"}}>
                    <div class="row">
                        <div class="col-lg-8">

                            <div class="contact_form">
                                <div class="contact_title">Get in touch</div>
                                <div class="contact_form_container">
                                    <form action="https://preview.colorlib.com/theme/course/post">
                                        <input id="contact_form_name" class="input_field contact_form_name" type="text" placeholder="Name"
                                            required="required" data-error="Name is required." />
                                        <input id="contact_form_email" class="input_field contact_form_email" type="email"
                                            placeholder="E-mail" required="required" data-error="Valid email is required." />
                                        <textarea id="contact_form_message" class="text_field contact_form_message" name="message"
                                            placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                        <button id="contact_send_btn" type="button" class="contact_send_btn trans_200" value="Submit">send
                                            message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="about">
                                <div class="about_title">Join Courses</div>
                                <p class="about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl
                                    ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Etiam eu purus nec eros varius
                                    luctus. Praesent finibus risus facilisis ultricies. Etiam eu purus nec eros varius luctus.</p>
                               
                                <ContactInfo />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div id="google_map">
                                <div class="map_container">
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

        </>
    )
}

export default Contact;