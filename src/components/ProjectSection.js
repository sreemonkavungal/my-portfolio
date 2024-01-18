import LoginAppImg from '../assets/images/LoginApp-MERN.jpg'
import ToDoImg from '../assets/images/ToDoList.jpg'
import BMIImg from '../assets/images/BMI-Calculator.jpg'
import HTMLImg from '../assets/images/HTML-Page.jpg'

export default function ProjectSection() {
    return (
        <div className="bg-white py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className=" mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Projects</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Dive into My Creations!
                    </p>
                </div>

                {/* Main Container */}
                <div className="p-5 sm:p-5 lg:flex-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">

                    {/* First Price Box */}

                    <div className=" -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md sm:mt-20 lg:flex-shrink-0 mx-auto items-center justify-center">
                        <div className=" rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">LoginApp-MERN</p>



                                <div className="mb-6">
                                    <img src={LoginAppImg} alt="LoginApp-IMG" className="w-full h-40 object-cover rounded-md mt-5" />
                                </div>

                                {/* Visit Site Button */}
                                <a
                                    href="https://loginapp-mern.pages.dev/" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    Visit Site
                                </a>

                                {/* GitHub Button */}
                                <a
                                    href="https://github.com/sreemonkavungal/loginApp-MERN" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    GitHub Link
                                </a>


                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    This is a full-stack login application built using the MERN stack (MongoDB, Express, React, and Node.js).
                                    The app allows users to register an account and securely log in with their email and password.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Second Price Box */}


                    <div className=" -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md sm:mt-20 lg:flex-shrink-0 mx-auto items-center justify-center">
                        <div className=" rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">ToDo-List-React</p>



                                <div className="mb-6">
                                    <img src={ToDoImg} alt="ToDoList-IMG" className="w-full h-40 object-cover rounded-md mt-5" />
                                </div>

                                {/* Visit Site Button */}
                                <a
                                    href="https://todo-list-react-27o.pages.dev/" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    Visit Site
                                </a>

                                {/* GitHub Button */}
                                <a
                                    href="https://github.com/sreemonkavungal/todo-list-react" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    GitHub Link
                                </a>


                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    This project was built using React and Redux, and allows users to create and manage their to-do lists.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Price Box */}

                    <div className=" -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md sm:mt-20 lg:flex-shrink-0 mx-auto items-center justify-center">
                        <div className=" rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">BMI-Calculator-React</p>



                                <div className="mb-6">
                                    <img src={BMIImg} alt="BMI-IMG" className="w-full h-40 object-cover rounded-md mt-5" />
                                </div>

                                {/* Visit Site Button */}
                                <a
                                    href="https://bmi-calculator-react.pages.dev/" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    Visit Site
                                </a>

                                {/* GitHub Button */}
                                <a
                                    href="https://github.com/sreemonkavungal/bmi-calculator-react" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    GitHub Link
                                </a>


                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    This application was built using React, and allows users to calculate their body mass index (BMI) based on their weight and height.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Fourth Price Box */}




                    <div className=" -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md sm:mt-20 lg:flex-shrink-0 mx-auto items-center justify-center">
                        <div className=" rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Single-HTML-Page</p>



                                <div className="mb-6">
                                    <img src={HTMLImg} alt="HTML-IMG" className="w-full h-40 object-cover rounded-md mt-5" />
                                </div>

                                {/* Visit Site Button */}
                                <a
                                    href="https://sreemonkavungal.github.io/single-html-page/" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    Visit Site
                                </a>

                                {/* GitHub Button */}
                                <a
                                    href="https://github.com/sreemonkavungal/single-html-page" target="_blank" rel="noreferrer"
                                    className="mt-5 block w-full rounded-md bg-white border border-indigo-600 px-3 py-2 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-600
                                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                                >
                                    GitHub Link
                                </a>


                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    This website showcases my skills in HTML and CSS, and features a simple and clean design.
                                    In addition to the visual design, I've also focused on creating clean and semantic HTML code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Space For Price Box */}
            </div>



        </div>
    )
}
