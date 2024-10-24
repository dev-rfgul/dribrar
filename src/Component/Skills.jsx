import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faMagnifyingGlass, faBook, faPen, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Heading from './Heading';
const skills = [
    {
        title: 'Animal Feed Formulation',
        description: 'Veterinary support meals for specific medical needs like renal, cardiac, and obesity management.',
        icon: faPaw,
        url:'https://www.upwork.com/services/product/lifestyle-balanced-homemade-dog-food-formulation-1552934708666601472?ref=project_share '
    },
    {
        title: 'Content Review and Fact-Checking',
        description: 'Meticulous review for animal nutrition content, ensuring scientific accuracy.',
        icon: faMagnifyingGlass,
        url:'https://www.upwork.com/services/product/writing-translation-fact-checked-veterinary-content-blog-book-poster-white-paper-1847589635253997687?ref=project_share '
    },
    {
        title: 'Veterinary Content Writer',
        description: 'Creating scientifically accurate content focused on veterinary nutrition and treatments.',
        icon: faBook,
        url:'https://www.upwork.com/services/product/writing-translation-pets-related-content-article-and-blogs-1552928466689769472?ref=project_share '
    },
    {
        title: 'Blog Host Writer',
        description: 'Hosting and writing for veterinary blogs with research-driven articles.',
        icon: faPen,
        url:'https://www.fiverr.com/s/1qVYd36 '
    },
    {
        title: 'Professional Translator',
        description: 'Translation services in English, Urdu, and Turkish, specializing in veterinary topics.',
        icon: faGlobe,
        url:'https://www.fiverr.com/s/2Kyg45q '
    },
];

const SkillsSection = () => {
    return (
        <section id='skills' className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <Heading subHeading={'Skills I have'} heading={'Skills'}/>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg border border-gray-900 transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <div className="text-black text-6xl mb-6 justify-center items-center flex">
                                <FontAwesomeIcon icon={skill.icon} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">{skill.title}</h3>
                                <p className="text-gray-600 mb-6 text-center">{skill.description}</p>
                                <button className="py-2 px-6 border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105" >
                                    <a  target='_blank' href={skill.url}>
                                        Contact Me
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
