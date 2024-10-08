

import React from 'react';
import Heading from './Heading'

const AboutMe = () => {
    return (
        <section id='about' className="py-12 px-6 md:px-8 lg:px-16 bg-gray-50">
            <Heading heading={"About Me"} subHeading={"get to know more about me"} />
            <div className="flex  flex-col md:flex-row items-center justify-md:justify-between space-y-8 md:space-y-0 md:space-x-6 lg:space-x-12">
                <div className=" w-full md:w-3/10 lg:w-1/3 flex justify-center items-center">
                    <img
                        src="https://dribrar.netlify.app/images/ibrar's%20img.png   "
                        alt="Profile Picture"
                        className="w-full max-w-xs rounded-lg border-2 border-black shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="w-full md:w-7/10 lg:w-2/4 flex flex-col gap-6 md:gap-8 lg:gap-12 relative md:-ml-6 lg:-ml-12">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">

                        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg border border-black border-opacity-60 w-full md:w-1/2">
                            <div className="text-3xl md:text-4xl mb-4 text-blue-600">👥</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Education</h2>
                            <p className="text-gray-700 text-base md:text-lg mt-2">PhD in Animal Nutrition</p>
                            <p className="text-gray-500 font-bold">Selcuk University, Turkey</p>
                            <p className="text-gray-700 text-base md:text-lg mt-2">MPhil (UVAS)</p>
                            <p className="text-gray-700 text-base md:text-lg mt-2">DVM (IUB)</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg border border-black border-opacity-60 w-full md:w-1/2">
                            <div className="text-3xl md:text-4xl mb-4 text-blue-600">🏅</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Experience</h2>
                            <p className="text-gray-700 text-base md:text-lg mt-2">Nutrition Consultant </p>
                            <p className="text-gray-500 font-bold">OMAKASE AST PTE LTD</p>
                            <p className="text-gray-700 text-base md:text-lg mt-2">Medical Reviewer</p>
                            <p className="text-gray-500 font-bold">Chicken Fans</p>
                            
                        </div>

                    </div>
                    <div className="text-justify  text-gray-700 max-w-3xl ">
                        <p className="   md:text-lg leading-relaxed">
                            My major field is monogastric animals. In my master's I did work on broilers and published a review and research article on Threonine in broiler nutrition. Later, In PhD. I did my research on grasshoppers (locusta migratora). Currently, I am working on the homemade dog and cat feed formulation. Alternative protein sources especially insects meal in animal nutrition is my major domin. Black soldier fly, yellow mealworm and grasshopper are mainly focused insects. Looking forward to collaborate.


                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
