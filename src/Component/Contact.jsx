import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faBlogger, faResearchgate, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

import Heading from './Heading';

const Contact = () => {
    // Define initial colors and transitions

    const [iconColor, setIconColor] = useState({
        linkedin: 'black',
        facebook: 'black',
        instagram: 'black',
        blogger: 'black',
        whatsapp: 'black',
        researchgate: 'black',
        googleScholar: 'black',

    });

    const colors = {
        linkedin: '#0077b5',
        facebook: '#1877f2',
        instagram: '#e4405f',
        whatsapp: '#25d366',
        blogger: '#FF5722',
        researchgate: '#00CCBB',
        googleScholar: '#3367D6',

    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconColor(prevColors => {
                const newColors = {};
                Object.keys(prevColors).forEach(key => {
                    // Toggle between black and respective color
                    newColors[key] = prevColors[key] === 'black' ? colors[key] : 'black';
                });
                return newColors;
            });
        }, 1000); // Change every 1 second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);
    return (
        <div id='contact' className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:p-12 lg:p-24">
            <Heading heading="Let's Connect" subHeading="Ask or tell Something" />
            <p className="text-lg mb-6 md:mb-12 text-gray-700 max-w-md text-center">
                Feel free to reach out to me on any of the following platforms. I look forward to connecting with you!
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-6">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/rao-ibrar-ahmed-phd-10291b106/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform" style={{ color: iconColor.linkedin }} />
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/raoibrarahmed" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform" style={{ color: iconColor.facebook }} />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/dribrar_6/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform" style={{ color: iconColor.instagram }} />
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/+905466677341" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform" style={{ color: iconColor.whatsapp }} />
                </a>
                {/* Google Scholar */}
                <a href="https://scholar.google.com/citations?user=6XfTQc8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoogleScholar} className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform" style={{ color: iconColor.googleScholar }} />
                </a>
                {/* Blogger */}
                <a href="https://all-about-dogs-2024.blogspot.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBlogger} className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform" style={{ color: iconColor.blogger }} />
                </a>
                {/* ResearchGate */}
                <a href="https://www.researchgate.net/profile/Ibrar-Ahmed-2?ev=hdr_xprf&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSIsInBvc2l0aW9uIjoiZ2xvYmFsSGVhZGVyIn19" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faResearchgate} className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition-transform" style={{ color: iconColor.researchgate }} />
                </a>

            </div>

            <p className="text-sm text-gray-500 mt-6 md:mt-12">© 2024 Dev RF-GUL. All rights reserved.</p>
        </div>
    );
};

export default Contact;
