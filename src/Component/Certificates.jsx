
import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'
// import image from '../assets/images/epdidmology.png'

const Certificates = () => {
    const [filter, setFilter] = useState('featured');

    const certificateData = [

        {
            image: './images/dairy-product.png',
            title: 'Dairy Production and Management',
            tags: ['Git', 'Version Control', 'GitHub'],
            category: ['featured', 'web'],
            githubLink: 'https://www.coursera.org/account/accomplishments/certificate/YGQLS7BXQPEP',
            liveDemoLink: '#',
        },
        {
            image: 'images/epidimology.png',
            title: 'Epidemiology: The Basic Science of Public Health',
            tags: ['HTML', 'CSS', 'Responsive Design'],
            category: ['featured', 'web'],
            githubLink: 'https://www.coursera.org/account/accomplishments/certificate/4BZQHG33SSGW',
            liveDemoLink: '#',
        },

        {
            image: 'images/publish-research.png',
            title: 'How to Write and Publish a Scientific Paper',
            tags: ['Linux', 'Operating Systems', 'Shell'],
            category: ['OS'],
            githubLink: 'https://www.coursera.org/account/accomplishments/certificate/PTFWM244RXKA',
            liveDemoLink: '#',
        },
        {
            image: 'images/science-of-success.png',
            title: 'The Science of Success: What Researchers Know that You Should Know',
            tags: ['Command Line', 'Bash', 'Shell Scripting'],
            category: ['OS'],
            githubLink: 'https://www.coursera.org/account/accomplishments/certificate/QEWEDQT866Q5',
            liveDemoLink: '#',
        },
        {
            image: 'images/epidemics.png',
            title: 'Epidemics, Pandemics and Outbreaks',
            tags: ['SQL', 'Databases', 'Queries'],
            category: ['sql'],
            githubLink: 'https://www.coursera.org/account/accomplishments/certificate/T3ULJR432JTD',
            liveDemoLink: '#',
        },
        {
            image: 'images/chicken-behaviour.png',
            title: 'Intro to Chicken Behaviour',
            tags: ['SQL', 'Joins', 'Subqueries'],
            category: ['sql'],
            githubLink: 'https://www.coursera.org/account/accomplishments/verify/44XDCEC6DGYL',
            liveDemoLink: '#',
        },
        {
            image: 'images/intro-to-personal-branding.png',
            title: 'Intro to Personal Branding',
            tags: ['SQL', 'Joins', 'Data Analysis'],
            category: ['sql'],
            githubLink: 'https://www.coursera.org/account/accomplishments/certificate/XR23KK4YN6AP',
            liveDemoLink: '#',
        },
        {
            image: './images/intro-to-animal-behaviour.png',
            title: ' Introduction to Animal Behaviour',
            tags: ['React', 'JavaScript', 'JSX'],
            category: ['featured', 'web'],
            githubLink: 'https://courses.edx.org/certificates/b4451dfab9be4b72811117bc68f0a0f4',
            liveDemoLink: '#',
        },
    ];
    const btns = [
        { label: 'Featured', value: 'featured' },
        { label: 'All', value: 'All' },
    ]

    const filterCertificates = (category) => {
        setFilter(category);
    };

    const filteredCertificates = filter === 'All'
        ? certificateData
        : certificateData.filter(certificate => certificate.category.includes(filter));

    return (
        <div id='certificates' className="p-6">
            <Heading heading={"Certifications"} subHeading={"certifications I Had"} />
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {btns.map((btn) => (
                    <button
                        key={btn.value}
                        className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                            ? 'bg-blue-500 text-white'  // Active button styles
                            : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                            }`}
                        onClick={() => filterCertificates(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap  justify-center gap-6">
                {filteredCertificates.map((certificate, index) => (
                    <Card
                        key={index}
                        image={certificate.image}
                        title={certificate.title}
                        tags={certificate.tags}
                        btnText={'View Certificate'}
                        btn2Text={false}
                        btn1Url={certificate.githubLink}
                        btn2Url={certificate.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certificates;
