// import React from 'react';

// const skills = [
//     {
//         title: 'Animal Feed Formulation',
//         description: 'Specializing in veterinary support meals for specific medical needs such as renal, cardiac, hepatic, cancer, and obesity management.',
//         icon: '🐾',
//     },
//     {
//         title: 'Veterinary Content Review and Fact-Checking',
//         description: 'Providing meticulous review services for animal nutrition-related content, ensuring scientific accuracy.',
//         icon: '🔍',
//     },
//     {
//         title: 'Veterinary Content Writer',
//         description: 'Creating scientifically accurate content focused on veterinary nutrition, diseases, and treatments.',
//         icon: '📖',
//     },
//     {
//         title: 'Blog Host Writer for Veterinary Sites',
//         description: 'Hosting and contributing to veterinary blogs with research-driven articles for veterinarians and pet owners.',
//         icon: '📝',
//     },
//     {
//         title: 'Professional Translator',
//         description: 'Offering translation services between English, Urdu, and Turkish, specializing in veterinary topics.',
//         icon: '🌐',
//     },
// ];

// const SkillsSection = () => {
//     return (
//         <section className="py-12 bg-gray-100">
//             <div className="container mx-auto">
//                 <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//                     My Skills
//                 </h2>
//                 <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//                     {skills.map((skill, index) => (
//                         <div
//                             key={index}
//                             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                         >
//                             <div className="text-5xl mb-4">{skill.icon}</div>
//                             <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
//                             <p className="text-gray-600">{skill.description}</p>
//                             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
//                                 Contact
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SkillsSection;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPaw, faMagnifyingGlass, faBook, faPen, faGlobe } from '@fortawesome/free-solid-svg-icons';

const skills = [
    {
        title: 'Animal Feed Formulation',
        description: 'Veterinary support meals for specific medical needs like renal, cardiac, and obesity management.',
        icon: faPaw,
    },
    {
        title: 'Content Review and Fact-Checking',
        description: 'Meticulous review for animal nutrition content, ensuring scientific accuracy.',
        icon: faMagnifyingGlass,
    },
    {
        title: 'Veterinary Content Writer',
        description: 'Creating scientifically accurate content focused on veterinary nutrition and treatments.',
        icon: faBook,
    },
    {
        title: 'Blog Host Writer',
        description: 'Hosting and writing for veterinary blogs with research-driven articles.',
        icon: faPen,
    },
    {
        title: 'Professional Translator',
        description: 'Translation services in English, Urdu, and Turkish, specializing in veterinary topics.',
        icon: faGlobe,
    },
];

const SkillsSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="text-blue-500 text-6xl mb-6">
                                <FontAwesomeIcon icon={skill.icon} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">{skill.title}</h3>
                            <p className="text-gray-600 mb-6">{skill.description}</p>
                            <button className="py-2 px-6 border border-black rounded-lg text-black bg-white hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105">
                                Contact
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
