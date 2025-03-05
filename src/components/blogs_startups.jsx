import React from 'react'
import { Menu, X } from 'lucide-react'
import a2 from '../assets/a2.png'
import clubs from "../assets/blogimg/clubs.jpeg"
import ebuli from "../assets/blogimg/ebuli.jpeg"
import krishi from "../assets/blogimg/krishi.jpeg"
import machao from "../assets/blogimg/machao.jpeg"
import mentor from "../assets/blogimg/mentor.jpeg"
import scholar from "../assets/blogimg/scholar.jpeg"
import sessions from "../assets/blogimg/sessions.jpeg"
import swadesh from "../assets/blogimg/swadesh.jpeg"
import teach from "../assets/blogimg/teach.jpeg"

const posts = [
  {
    category: 'SWADESH INTERN',
    title: 'It is an open source platform, provides internship and mentoring',
    description: 'Founders - Aditya Kumar Mishra, Sushant Verma and Madhvendra Singh',
    author: 'Aditya Kumar Mishra',
    date: '3 April 2023',
    avatar: 'https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg',
    poster:swadesh,
  },
  {
    category: 'KRISHI KALYAN',
    title: 'It is a service based company which provides service to bank to provide loans to farmers',
    description:
      ' Founder - Madhvendra Singh',
    author: 'Madhvendra Singh',
    date: '1 April 2023',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    poster:
      krishi,
  },
  {
    category: 'MACHAO',
    title: 'Machao is a Merchandise company',
    description:
      ' Founders - Raghuvendhar, Sarthak Jain and Sachindanand Singh',
    author: 'Sarthak Jain',
    date: '28 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    poster:machao,
  },
  {
    category: ' SCHOLAR RANK AI',
    title: ' ScholarRank AI is a comprehensive platform for online learning, teaching, assessment and proctoring.',
    description:
      'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
    author: ' Founders - Ritik Kumar',
    date: '25 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    poster:scholar,
  },
]

export function Blogstartupone() {


  return (
    <div>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-red-600 md:text-5xl md:leading-10">
            Startups
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Explore the innovative startups that are revolutionizing the tech industry and making a difference in the world.
          </p>
        </div>
      {/* posts */}
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.title} className="border">
            <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #{post.category}
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
              <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div >
  )
}
