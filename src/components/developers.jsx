import React from 'react'
import anubhav from '../assets/images/anubhav.jpg'
import palak from '../assets/images/Palak.jpg'
import Toshak from '../assets/images/Toshak.jpeg'

export default function CardComponent() {
    const people = [
        {
            name: 'Toshak Bhat',
            description: 'Android Dev | Blogspot writer | Innovate 1.0 Runner-up 🏆',
            image: Toshak,
            profileUrl: 'https://www.linkedin.com/in/toshakbhat/'
        },
        {
            name: 'Anubhav Singh',
            description: 'Student at NIET | Freelancer | Front-end developer | Graphic Designer | Editor ',
            image: anubhav,
            profileUrl: 'https://www.linkedin.com/in/anubhav-singh99/'
        },
        {
            name: 'Palak Bhatnagar',
            description: 'A Techie | A curious learner | Learning full stack development , JS, C/C++, Python | Student at NIET',
            image: palak,
            profileUrl: 'https://www.linkedin.com/in/palak-bhatnagar-361961277/'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {people.map((person, index) => (
                <div key={index} className="relative h-[400px] w-[300px] rounded-md">
                    <img
                        src={person.image}
                        alt={person.name}
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                        <h1 className="text-lg font-semibold text-white">{person.name}</h1>
                        <p className="mt-2 text-sm text-gray-300">{person.description}</p>
                        <a
                            href={person.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
                        >
                            View Profile &rarr;
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
