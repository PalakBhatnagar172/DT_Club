import React from 'react'
import { ArrowRight } from 'lucide-react'
import { CheckCircle, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SignInOne() {
  return (
    <section className="py-10">
      <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 m-5">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-green-600">
              Find your teammate for Smart India Hackathon 2024 by registering on this <Link to={"https://fun2code.vercel.app/"}><span className='text-red-600'>link</span></Link>

            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-green-600" />
          </div>
        </div>
      </div>
      <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 m-5">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-green-600">
            Explore the World of Computer Science:Join Our Interactive Workshop <Link to={"/events"}><span className='text-red-600'>link</span></Link>
            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-green-600" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl  text-center">
          <div className="isolate flex justify-center -space-x-2">
            <img
              className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt="Dan_Abromov"
            />
            <img
              className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg"
              alt="Guillermo_Rauch"
            />
            <img
              className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
            />
          </div>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
            Find from <span className="border-b-8 border-yellow-300 text-red-600">200+</span> your team
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
            Find your teammate for Smart India Hackathon 2024 by registering on the link below.
          </p>
          <Link
            to={"https://fun2code.vercel.app/"}>
            <button
              type="button"
              className="mt-8 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Find My Team
            </button>
          </Link>
        </div>
      </div>
      <hr className="mt-20" />
    </section>
  )
}
