


import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Projects = () => {

    const projectData = [
        {
            image: './images/services/doctor.png',
            title: 'Doctor',
            paragraph:'Medical Team Member of Chicken Fans .',
            category: 'Course',
            githubLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
            liveDemoLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
        },
        {
            image: './images/services/food-nutritionist.png',
            title: 'Food Nutritionist',
            paragraph:'Food Nutritionist at Pets Food Safety',
            category: 'Course',
            githubLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
            liveDemoLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
        },
        {
            image: './images/services/blogger.png',
            title: 'Blogger',
            paragraph:'I can write Articles,Instructions and Blogs on Pets, Animal Food and Animal Saftey .',
            category: 'Course',
            githubLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
            liveDemoLink: 'https://github.com/dev-rfgul/shopping-cart-OOP',
        },
    ]




    return (
        <div id='projects' className="p-4">
            <Heading heading={"Projects"} subHeading={"projects I made "} />
            <div className="flex flex-wrap justify-center gap-6">
                {projectData.map((project, index) => (
                    <Card
                        className="border border-black border-opacity-60"
                        key={index}
                        image={project.image}
                        title={project.title}
                        paragraph={project.paragraph}
                        btnText='GitHub'
                        btn2Text='Live Demo'
                        btn1Url={project.githubLink}
                        btn2Url={project.liveDemoLink}
                    />
                ))}
            </div>
            {/* <hr className="" /> */}
        </div>
    );
};

export default Projects;
