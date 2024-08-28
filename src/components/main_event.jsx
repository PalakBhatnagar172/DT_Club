'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.jpg";


export function BlogPageTwo() {
    return (
        <div className="w-full">
            <section className="relative overflow-hidden py-20">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto mb-14 max-w-2xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                                EVENTS
                            </span>
                            <h1 className="text-5xl font-bold"><span className='text-red-600'>HIGHLIGHTS</span> OF
                                OLD EVENTS</h1>
                        </div>
                        <div className="my-18 -mx-4 flex flex-wrap px-4">
                            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
                                <a className="group block w-full" href="#">
                                    <img
                                        className="mb-5 block w-full rounded-lg object-contain"
                                        src={e1}
                                        alt=""
                                    />
                                    <span className="mb-5 block text-gray-500">Jul 20, 2023</span>
                                    <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                                        THINK
                                        DIFFRENT
                                        2.0
                                    </h4>
                                    <p className="max-w-xl text-lg text-gray-500">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                        officia consequat duis enim velit mollit xercitation veniam consequat sunt
                                        nostrud amet.
                                    </p>
                                </a>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <a className="group mb-8 md:flex" href="#">
                                    <img
                                        className="h-40 w-48 rounded-lg"
                                        src={e2}
                                        alt=""
                                    />
                                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                                        <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            SEGUE 2.O
                                        </h4>
                                    </div>
                                </a>
                                <a className="group mb-8 md:flex" href="#">
                                    <img
                                        className="h-40 w-48 rounded-lg"
                                        src={e3}
                                        alt=""
                                    />
                                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                                        <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            EBULLIENCE'24
                                        </h4>
                                    </div>
                                </a>
                                <a className="group mb-8 md:flex" href="#">
                                    <img
                                        className="h-40 w-48 rounded-lg"
                                        src={e4}
                                        alt=""
                                    />
                                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                                        <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                                        <h4 className="text-xl font-semibold text-gray-900">
                                            WORKSHOP'24
                                        </h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-14 text-center">
                            <Link 
                            to={"/events"}>
                                <button
                                    type="button"
                                    className="rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    View All Posts
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="my-8" />
        </div>
    )
}
