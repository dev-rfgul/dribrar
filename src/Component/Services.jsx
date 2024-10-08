import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Projects = () => {
    const projectData = [



        {
            image: './images/projects/vet-articles.png',
            title: 'Veterinary Articles',
            tags: [],
            paragraph: 'I write blogs, articles, website content, instructions, description of products considering SEO optimization, scientific research along with citations.',
            category: ['Backend', ''],
            githubLink: '',
            liveDemoLink: '',
        },
        {
            image: './images/projects/animal-food.png',
            title: 'Formulated Animal Food',
            tags: [],
            paragraph: '"World is going for balanced diet rather than treating diseases which reduced animal performance.',
            category: ['Backend', ''],
            githubLink: '',
            liveDemoLink: '',
        },
        {
            image: 'https://dribrar.netlify.app/images/project1.webp',
            title: 'Blogger',
            tags: [],
            paragraph: 'I can write Articles,Instructions and Blogs on Pets, Animal Food and Animal Saftey along with Scientific Research and Citaitons, and will try my level best to satisfy you with my services.',
            category: ['Backend', ''],
            githubLink: '',
            liveDemoLink: '',
        },
    ];




    return (
        <div id='projects' className="p-4">
            <Heading heading={"Services"} subHeading={"services I offer "} />
            <div className="flex flex-wrap justify-center gap-6">
                {projectData.map((project, index) => (
                    <Card
                        className="border border-black border-opacity-60"
                        key={index}
                        image={project.image}
                        title={project.title}
                        tags={project.tags}
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
