'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import c1 from '../assets/c1.png'
import { Link } from 'react-router-dom'


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
            We are always here to help you. Feel free to contact us anytime.
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
                      <Link to={"https://www.instagram.com/dtclub_sfs?igsh=eHVxa2cwa295MjR4"}><span className="text-sm font-medium text-gray-500">@DTCLUB_SFS</span></Link>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 m-2">
                  <img width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Linkedin</span>
                      <Link to={"https://www.linkedin.com/company/design-thinking-clubdt/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BeFxE5e9zTVuKnD7u9sY1VQ%3D%3D"}><span className="text-sm font-medium text-gray-500">@design-thinking-clubdt</span></Link>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 m-2">
                  <img width="50" height="50" src="https://img.icons8.com/?size=100&id=124218&format=png&color=000000" alt="email"/>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Email</span>
                      <Link to={""}><span className="text-sm font-medium text-gray-500">dtclubsfs5@gmail.com</span></Link>
                      <Link to={""}><span className="text-sm font-medium text-gray-500">dtclub@niet.co.in</span></Link>
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
