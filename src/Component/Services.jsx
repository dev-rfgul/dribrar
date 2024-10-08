import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Services = () => {
    const projectData = [
        {
            image: './images/services/vet-articles.png',
            title: 'Veterinary Articles',
            tags: [],
            paragraph: 'I write blogs, articles, website content, instructions, description of products considering SEO optimization, scientific research along with citations.',
            category: ['Backend', ''],
            githubLink: 'https://www.fiverr.com/vetsoft/seo-optimized-dogs-and-pet-articles?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=nvnner',
            liveDemoLink: '',
        },
        {
            image: './images/services/animal-food.png',
            title: 'Formulated Animal Food',
            tags: [],
            paragraph: '"World is going for balanced diet rather than treating diseases which reduced animal performance.',
            category: ['Backend', ''],
            githubLink: 'https://www.fiverr.com/vetsoft/formulate-least-cost-feed-for-dogs?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=zlmmoy',

        },
        {
            image: './images/services/blogger.png',
            title: 'Blogger',
            tags: [],
            paragraph: 'I can write Articles,Instructions and Blogs on Pets, Animal Food and Animal Saftey along with Scientific Research and Citaitons, and will try my level best to satisfy you with my services.',
            category: ['Backend', ''],
            githubLink: 'https://www.fiverr.com/vetsoft/vet-review-fact-check-your-blogs?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=klb5ybn',

        },
    ];




    return (
        <div id='projects' className="p-4">
            <Heading heading={"Services"} subHeading={"services I offer "} />
            <div className="flex flex-wrap justify-center gap-6">
                {projectData.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        paragraph={project.paragraph}
                        tags={project.tags}
                        btnText={'Hire ME'}
                        btn2Text={false}
                        btn1Url={project.githubLink}
                    />
                ))}
            </div>
            {/* <hr className="" /> */}
        </div>
    );
};

export default Services;
