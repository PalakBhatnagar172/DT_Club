import React from 'react'
import Madhvendra from "../assets/images/Madhvendra.jpeg"

export function TestimonialOne() {
    return (
        <section className="px-2 py-10 md:px-0">
            <div className="mx-auto max-w-4xl">
                <div className="md:flex md:items-center md:justify-center md:space-x-14">
                    <div className="relative h-48 w-48 flex-shrink-0">
                        <img
                            className="relative h-48 w-48 rounded-full object-cover"
                            src={Madhvendra}
                        />
                    </div>

                    <div className="mt-10 md:mt-0">
                        <blockquote>
                            <p className="text-xl text-black">
                                “Empathizing with users is where true innovation begins. Our team transforms challenges into opportunities through collaboration and creativity.”
                            </p>
                        </blockquote>
                        <p className="mt-7 text-lg font-semibold text-red-600">Madhvendra Singh</p>
                        <p className="mt-1 text-base text-gray-600">President at Design Thinking club</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
