
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import React from "react";
import ShinyButton from '@/components/magicui/shiny-button';

const Banner = () => {
    return (
        <div id='home' className="p-6 md:p-10 lg:mt-20 md:mt-18 mt-6 rounded-lg shadow-2xl bg-gradient-to-r from-white via-gray-100 to-gray-50">
            <div className="flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-1/2 text-gray-900 mb-6 md:mb-0 md:pr-10 flex flex-col items-center justify-center">
                    <div className="text-center md:text-left lg:mb-10 md:mb-6 flex flex-col items-center">
                        <h1 className="text-lg text-gray-600 mb-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900">
                            Hello, I'm
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-800">
                            Dr. Ibrar
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-500 mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900">
                            Pet/Animal Nutrition | 🐕🐈🐄🐎🐑🐐🐃🐟🐥
                        </h2>
                        <h3 className="text-lg md:text-xl text-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-gray-900">
                            DVM (IUB) | MPhil (UVAS) | PhD in Animal Nutrition (Selcuk University, Turkey)
                        </h3>
                    </div>

                    {/* CV Button */}
                    <div className="flex justify-center md:justify-start mb-6">
                        <ShinyButton text='Download CV' />
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://wa.me/+905466677341"target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <FaWhatsapp size={35} />
                        </a>
                        <a href="https://www.linkedin.com/in/rao-ibrar-ahmed-phd-10291b106/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <FaLinkedin size={35} />
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="flex-shrink-0 w-64 h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 border border-gray-300 shadow-lg rounded-full overflow-hidden transform transition-all duration-500 hover:scale-105">
                        <img
                            src="https://dribrar.netlify.app/images/ibrar's%20img.png"
                            alt="Dr. Ibrar"
                            className="object-cover w-full h-full object-top"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Banner;
