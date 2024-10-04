import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Heading from "../Component/Heading";
import React, { useState, useEffect } from "react";


const reviews = [
    {
        img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ef6569d7310de760947e79076d70b362-1683257701707069725.601038/F61D85BA-0D42-4130-A99A-C07DF6C0CDE2",
        name: "Barkwell_pet",
        title: "United States",
        body: "I worked with Dr. Ahmed to peer review a set of formulations for pet functional treats created by another vet. His timeline was on time, his summary and feedback were extremely detailed, thorough and data based. Will work with Dr. Ahmed again."
    },
    {
        img: "https://avatar.vercel.sh/jill",
        name: "Mengster",
        title: "Singapore",
        body: "I had a very good experience working with Dr Ibrar on a custom order. He took the time to understand my requirements before sharing his thoughts and then committing to the work. I really appreciate his expertise on the poultry topic and would definitely work with him again in the near future."
    },
    {
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Serenalou",
        title: "United States",
        body: "The work is very good and professional. Very good communication."
    },


    {
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "giuseppeviola",
        title: "United States",
        body: "I recently hired Dr. Ibrar Ahmed on Fiverr to formulate a custom pet food recipe, and the experience exceeded my expectations. Dr. Ahmed was knowledgeable, attentive, and very responsive. He took the time to understand my pet's specific dietary needs and preferences, providing a detailed recipe that included all the necessary nutrients. The turnaround time was quick, and he was open to any adjustments I needed. My pet loves the new food, and I feel confident knowing it's a healthy choice. Highly recommend Dr. Ibrar Ahmed for any pet food formulation needs! Five stars!"
    },
    {
        img: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "grittytradeco",
        title: "Canada",
        body: "Thank you as always :)."
    },
    {
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Seasonal 2018",
        title: "United States",
        body: "I could not ask more. Certainly knows his stuff and was super quick and thorough. Highly impartial (which is great) and asked so many questions for my needs. Fantastic."
    },
    {
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "giuseppeviola",
        title: "United States",
        body: "This seller truly goes above and beyond! I cannot praise them enough for their dedication to crafting the perfect pet meal. From the moment I reached out with my concerns and preferences, they took the time to understand my pet's needs and carefully curated a meal plan that exceeded all expectations. Their attention to detail and commitment to quality are unmatched. Highly recommend his work! "
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const highlightKeywords = (text) => {
    const keywords = ['Fahad', 'recommend', 'working', 'shines', 'talented', 'web', 'website', 'professional', 'innovative', 'professional', 'highly', 'quality', 'creative', 'high', 'performance', 'frontend', 'backend', 'pleasing', 'development', 'skills', 'project', 'best'];
    keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        text = text.replace(regex, '<strong>$1</strong>');
    });
    return text;
};

const ReviewCard = ({ img, name, title, body }) => {
    const [isHovered, setIsHovered] = useState(false);

    const highlightedBody = highlightKeywords(body);

    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-visible rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full object-cover object-top"
                    style={{ width: '60px', height: '60px' }}
                    alt=""
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{title}</p>
                </div>
            </div>
            <blockquote
                className="mt-2 text-sm max-h-96 overflow-auto"
                dangerouslySetInnerHTML={{ __html: isHovered ? highlightedBody : body }} // Use the formatting based on hover state
            />
        </figure>
    );
};

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="testimonials" className="p-4">
            <Heading heading='Testimonials' subHeading={"What People Think about me"} />
            <div className="relative w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                {isLoading ? (
                    <div className="flex items-center justify-center h-32">
                        <p className="text-lg font-semibold dark:text-white">Loading...</p>
                    </div>
                ) : (
                    <>
                        {/* Adjusting speed for smoother infinite scroll */}
                        <Marquee speed={50} pauseOnHover className="marquee">
                            {firstRow.map(review => (
                                <ReviewCard key={review.name} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse speed={50} pauseOnHover className="marquee">
                            {secondRow.map(review => (
                                <ReviewCard key={review.name} {...review} />
                            ))}
                        </Marquee>
                    </>
                )}
                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    );
};

export default Reviews;
