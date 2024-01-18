import { CloudArrowUpIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, CircleStackIcon, CommandLineIcon, GlobeAltIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Full-Stack Development',
    description:
      'I specialize in both front-end and back-end development, showcasing projects using MongoDB, Express.js, React, and Node.js for end-to-end solutions.',
    icon: CommandLineIcon,
  },
  {
    name: 'Responsive Design',
    description:
      'I excel in creating responsive and visually appealing interfaces, utilizing frameworks like Bootstrap and CSS Grid.',
    icon: GlobeAltIcon,
  },
  {
    name: 'RESTful API Development',
    description:
      'My expertise lies in designing and implementing RESTful APIs using Express.js, ensuring seamless communication in web applications.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Database Management',
    description:
      'I handle MongoDB for effective schema design, CRUD operations, and data modeling, contributing to scalable and organized databases.',
    icon: CircleStackIcon,
  },
  {
    name: 'State Management',
    description:
      'Proficient in managing state in React through tools like Redux and the Context API, enhancing application performance.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Authentication and Authorization',
    description:
      'I implement secure user authentication and authorization using tools like JWT and OAuth.',
    icon: LockClosedIcon,
  },
]

export default function SkillsSection() {
  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Proficiencies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            A dynamic MERN stack developer, seamlessly bridging front-end and back-end technologies with a diverse skill set.
            Passionate about crafting efficient web applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-34 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
