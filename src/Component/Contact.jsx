import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa';
import Heading from './Heading';

const Contact = () => {
    // Define initial colors and transitions

    const [iconColor, setIconColor] = useState({
        linkedin: 'black',
        github: 'black',
        twitter: 'black',
        facebook: 'black',
        instagram: 'black',
        youtube: 'black',
        whatsapp: 'black',
        phone: 'black'
    });

    const colors = {
        linkedin: '#0077b5',
        github: '#333',
        twitter: '#1da1f2',
        facebook: '#1877f2',
        instagram: '#e4405f',
        youtube: '#ff0000',
        whatsapp: '#25d366',
        phone: '#007bff'
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
            <Heading heading="Let's Connect" subHeading={"Ask or tell Something"} />
            <p className="text-lg mb-6 md:mb-12 text-gray-700 max-w-md text-center">
                Feel free to reach out to me on any of the following platforms. I look forward to connecting with you!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <a href="https://www.linkedin.com/in/rao-ibrar-ahmed-phd-10291b106/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.linkedin }} />
                </a>
                <a href="https://www.facebook.com/raoibrarahmed" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.facebook }} />
                </a>
                <a href="https://twitter.com/rfgul" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.twitter }} />
                </a>
                <a href="https://www.instagram.com/dribrar_6/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.instagram }} />
                </a>

                <a href="https://wa.me/+905466677341" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl" style={{ color: iconColor.whatsapp }} />
                </a>

            </div>
            <p className="text-sm text-gray-500 mt-6 md:mt-12">© 2024 Dev RF-GUL. All rights reserved.</p>
        </div>
    );
};

export default Contact;
