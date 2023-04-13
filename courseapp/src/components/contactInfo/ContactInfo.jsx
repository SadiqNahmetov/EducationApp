import React from 'react'
import { Link } from 'react-router-dom';

function ContactInfo() {
    return (
        <div>
            <div className="footer_column_content">
                <ul>
                    <li className="footer_contact_item">
                        <div className="footer_contact_icon">

                            <img src="./images/placeholder.svg" alt="" />
                        </div>
                        Blvd Libertad, 34 m05200 Arévalo
                    </li>
                    <li className="footer_contact_item">
                        <div className="footer_contact_icon">

                            <img src="./images/smartphone.svg" alt="" />
                        </div>
                        +994 50 500 50 50
                    </li>
                    <li className="footer_contact_item">
                        <div className="footer_contact_icon">

                            <img src="./images/envelope.svg" alt="" />
                        </div>
                        <Link to="https://www.linkedin.com/in/sadig-nahmatov-a320b5264"
                         className="__cf_email__" >hello@company.com</Link>
                           
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInfo;