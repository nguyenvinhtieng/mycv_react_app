import React from "react";
import { FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact__heading">You can connect me at</div>
            <div className="contact__content">
                <div className="contact__item">
                    <a
                        href="https://www.facebook.com/nvinhtieng"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Facebook <FaFacebookF />
                    </a>
                </div>
                <div className="contact__item">
                    <a
                        href="https://www.instagram.com/viin__ttiengg/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram <FiInstagram />
                    </a>
                </div>
                <div className="contact__item">
                    <a
                        href="https://www.youtube.com/channel/UCV8NsXCp-h3-GNN0rQHeBeQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Youtube <FaYoutube />
                    </a>
                </div>
                <div className="contact__item">
                    <a href="#!">
                        Phone <FaPhoneAlt />
                    </a>
                </div>
                <div className="contact__item">
                    <a
                        href="mailto: vinhtieng123@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Email <SiGmail />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
