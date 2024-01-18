import React from 'react';
import '../App.css'

export default function SkillCloud() {
  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-25 w-full object-contain lg:col-span-1 logo"

            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-25 w-full object-contain lg:col-span-1 logo"

            src="https://miro.medium.com/v2/resize:fit:1400/1*DAIoObWqwP2P-EMJjBEdqQ.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-25 w-full object-contain lg:col-span-1 logo"

            src="https://krify.co/wp-content/uploads/2019/06/ReactJS.jpg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-25 w-full object-contain sm:col-start-2 lg:col-span-1 logo"

            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-25 w-full object-contain sm:col-start-auto lg:col-span-1 logo"

            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png"
            alt="Statamic"
            width={158}
            height={48}
          />

        </div>
      </div>
    </div>
  )
}
