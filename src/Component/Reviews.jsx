import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Heading from "../Component/Heading";
import React, { useState, useEffect } from "react";


const reviews = [
    {
        img: "https://randomuser.me/api/portraits/men/12.jpg",
        name: "tentolini",
        title: "🇮🇹 Italy",
        body: "What can I say? This article is also stunning, very thorough and well argued. I found out a lot of things I didn't know, definitely worth considering on these veterinary topics."
    },
    {
        img: "https://randomuser.me/api/portraits/men/13.jpg",
        name: "ivkojad",
        title: "🇷🇸 Serbia",
        body: "Very honest, fast and efficient. He helped me with my project and gave an expert opinion as a veterinarian. Every question I asked him he answered in detail. My recommendations."
    },
    {
        img: "https://randomuser.me/api/portraits/men/14.jpg",
        name: "grittytradeco",
        title: "🇨🇦 Canada",
        body: "Thank you for all your work and collaboration so far. Looking forward to working with you more in the future."
    },


    {
        img: "https://randomuser.me/api/portraits/men/15.jpg",
        name: "drasadali10",
        title: "🇬🇧 United Kingdom",
        body: "Excellent experience again with Ibrar. He always is so helpful and does his job beyond expectation. Such a professional work. Thank you so much. Fully recommended. Hope to have your services again."
    },
    {
        img: "https://randomuser.me/api/portraits/men/16.jpg",
        name: "luispuno",
        title: "🇵🇭 Philippines",
        body: "Doctor Ahmad accommodated all my requests and was very easy to talk to. He was knowledgeable and showed this in adjustments in recipes based on ingredients in my country. Thank you Doctor! I'm so happy! "
    },
    {
        img: "https://randomuser.me/api/portraits/men/17.jpg",
        name: "shahidmubass932",
        title: "🇪🇪 Estonia",
        body: "Thank you so much Vetsoft. Literally speaking your article proved a lifesaver for me. The article is well informative and coherent to read. It's the value of money as well. Suggested, recommended, and endorsed everything you get from me."
    },
    {
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "altaf19n",
        title: "🇰🇼 Kuwait",
        body: "My favorite person on Fiverr 🙏🙏🙏I took 2 recipes for my sick dogs and did tests after the diet everything is more than perfect 👍"
    },
    {
        img: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "douaac",
        title: "🇲🇦 Morocco",
        body: "Awesome Work and Great Communication. The seller is very patient and understands the needs."
    },
    {
        img: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "randomjuststuff",
        title: "🇩🇪 Germany",
        body: "Fast and very good Service Provider, Blog writer, ghost writer, love it, everytime again 👍"
    },
    {
        img: "https://randomuser.me/api/portraits/men/8.jpg",
        name: "hassanosman1",
        title: "🇹🇷 Turkey",
        body: "Glad to work with vetsoft. Professional freelance, provide me the exact file as I want. I will love to work with him again. I will recommend him. 100% recommended."
    },
    {
        img: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "turklish21",
        title: "🇮🇳 India",
        body: "Thank you so much Vetsoft for making it so simple. The most important thing is you are very punctual and deliver it on time. I will highly recommend Vetsoft for translational work."
    },
    {
        img: "  ",
        name: "ggoapps",
        title: "🇺🇸 United States",
        body: "Good service, and Vetsoft was helpful in answering all of my questions, provided what we needed for a homemade dog food recipe. Thanks Again!"
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
