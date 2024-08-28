'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import c1 from '../assets/c1.png'


export function ContactPageOne() {

  return (
    <div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="mx-auto max-w-max rounded-full border bg-red-200 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
              Share your thoughts
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            <span className='text-red-600'>Love</span> to hear from you
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl"><span className='text-red-600'>Get</span> in touch</p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <div className="flex items-left flex-col">
                  <div className="flex items-center space-x-2 m-2">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Instagram</span>
                      <span className="text-sm font-medium text-gray-500">@DTCLUB_SFS</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 m-2">
                  <img width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Linkedin</span>
                      <span className="text-sm font-medium text-gray-500">@DTCLUB_SFS</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src={c1}
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />

    </div>
  )
}
