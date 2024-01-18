import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    'Front-End & Back-End',
    'Database Management',
    'State Management',
    'Version Control',
    'Deployment',
    'Authentication and Authorization',
]

export default function AboutSection() {
    return (
        <div className="bg-white py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className=" mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>

                </div>
                <div className=" mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-15 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <p className="mt-0 text-base leading-7 text-gray-700 text-center">


                            <span> Hey there! I'm SREEMON KS, a self-taught MERN stack developer fueled by passion and a relentless drive for creating seamless and dynamic web applications.
                                My journey into the world of full-stack development is a testament to my dedication to continuous learning.</span>
                            <br></br>
                            <br></br>
                            <span> With an innate love for problem-solving and a keen eye for detail, I bring a unique perspective to every project. Beyond being a developer, I see myself as a dedicated learner, always ready to embrace challenges and craft innovative solutions.
                                Let's collaborate and build something amazing together – where every line of code tells a story of creativity and progress!</span>
                            <br></br>
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Technical Proficiency</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
