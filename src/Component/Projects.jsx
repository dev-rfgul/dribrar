import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Projects = () => {

    const projectData = [
        {
            image: './images/projects/doctor.png',
            title: 'Doctor',
            paragraph:'Medical Team Member of Chicken Fans .',
            category: 'Course',
            githubLink: 'https://www.chickenfans.com/about-us/',
        },
        {
            image: './images/projects/food-nutritionist.png',
            title: 'Food Nutritionist',
            paragraph:'Food Nutritionist at Pets Food Safety',
            category: 'Course',
            githubLink: 'https://petsfoodsafety.com/author/ibrarahmed/',
        },
        {
            image: './images/projects/blogger.png',
            title: 'Blogger',
            paragraph:'I can write Articles,Instructions and Blogs on Pets, Animal Food and Animal Saftey .',
            category: 'Course',
            githubLink: 'https://www.grittypetco.ca/pages/about-us',
        },
    ]




    return (
        <div id='projects' className="p-4">
            <Heading heading={"Projects"} subHeading={"Projects I had done "} />
            <div className="flex flex-wrap justify-center gap-6">
                {projectData.map((project, index) => (
                    <Card
                        className="border border-black border-opacity-60"
                        key={index}
                        image={project.image}
                        title={project.title}
                        paragraph={project.paragraph}
                        btnText='View'
                        btn2Text={false}
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
