import React from 'react';
import { ServerIcon, CircleStackIcon, CloudIcon, GlobeAltIcon } from '@heroicons/react/20/solid'

import ContentImage from '../assets/images/SREEMON KS.jpg'


export default function ContentSection() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-28 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className=" lg:pr-4">
                        <div className="pt-7 lg:pt-0 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Welcome To My Portfolio!</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Passionate Self-Taught Developer</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Hello, I'm SREEMON KS, a self-motivated and passionate MERN (MongoDB, Express JS, React JS, Node JS) stack developer.
                                I am on an exciting journey of continuous learning and growth in the dynamic world of web development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-20 p-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

                    <img className="h-400 w-300 -ml-12 -mt-12 p-12" src={ContentImage} alt="HomeImg" />

                </div>



                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 pt-0">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CircleStackIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">MongoDB Exploration : </strong>
                                        I embraced MongoDB, mastering the art of flexible and scalable data structures.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CloudIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Express JS Mastery : </strong>
                                        Express JS became my foundation for creating robust server-side APIs.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <GlobeAltIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">React JS Artistry : </strong>
                                        Crafting immersive user interfaces, React JS empowered me with its component-based architecture.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Node JS Unleashed : </strong>
                                        Node JS unlocked server-side JavaScript's power, streamlining my development workflow.
                                    </span>
                                </li>
                            </ul>
                            {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Join Me!</h2> */}
                            <a href="https://www.linkedin.com/in/sreemonkavungal/" target="_blank" type="submit" rel="noreferrer" className="mt-12 block bg-white w-60 h-10 text-indigo-600 text-center 
                            font-semibold border border-indigo-600 py-1 rounded-md focus:outline-none focus:ring focus:border-indigo-600 hover:bg-indigo-600 hover:text-white">
                                Connect Me On LinkedIn
                            </a>

                            <p className="mt-6 text-lg">
                                Let's build the future of web development with the MERN stack!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
