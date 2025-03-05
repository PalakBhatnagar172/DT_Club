import React from 'react'
import { Link } from 'react-router-dom'

export function FaqFour() {
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            <span className='text-red-600'>Frequently</span> Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Ask whatever you want to know about the Design Thinking Club, and we&apos;ll be happy to answer.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          <div >
            <h2 className="text-xl font-semibold text-black">Personalized Mentoring Sessions </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              Receive one-on-one guidance from
              experienced mentors who will help you refine
              your ideas and unlock your full potential.

            </p>
          </div>
          <div >
            <h2 className="text-xl font-semibold text-black">Hands-On Experience </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              Engage in real-world projects and ground level work that puts your skills to the test
              and helps you gain practical experience.


            </p>
          </div>
          <div >
            <h2 className="text-xl font-semibold text-black">Enhanced Problem-Solving Skills</h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              Develop and sharpen your problem-solving
              abilities through innovative challenges and
              collaborative exercises.
            </p>
          </div>
          <div >
            <h2 className="text-xl font-semibold text-black">Constructive Feedback on Your Ideas </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              Get valuable insights and balanced feedback on
              your ideas, including their strengths and areas
              for improvement, to make them even better.

            </p>
          </div>

        </div>
        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <Link
          to={"/contact"}>
            <a href="#" title="" className="text-red-600 font-semibold hover:underline">
              Contact us
            </a>
          </Link>
        </p>
      </div>
    </section>
  )
}
