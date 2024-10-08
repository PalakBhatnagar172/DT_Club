import React from 'react'
import { Menu, X } from 'lucide-react'
import a2 from '../assets/a2.png'

const posts = [
  {
    category: 'Design',
    title: '10 Tips for Crafting the Perfect UX Portfolio',
    description: 'Learn how to showcase your design skills and stand out in a crowded job market.',
    author: 'Emily Lee',
    date: '3 April 2023',
    avatar: 'https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg',
    poster:
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
  },
  {
    category: 'Technology',
    title: 'The Future of Mobile App Development',
    description:
      'Discover the latest trends and techniques that will shape the future of mobile app development.',
    author: 'John Smith',
    date: '1 April 2023',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    poster:
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
  },
  {
    category: 'Business',
    title: 'How to Launch a Successful Startup',
    description:
      'Learn the essential steps to launch a successful startup and make your dreams a reality.',
    author: 'Sarah Brown',
    date: '28 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    poster:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Health',
    title: 'The Benefits of Mindfulness Meditation',
    description:
      'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
    author: 'David Kim',
    date: '25 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    poster:
      'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Education',
    title: 'Why Learning a Second Language is Important',
    description:
      'Explore the benefits of learning a second language and how it can improve your cognitive abilities.',
    author: 'Maria Rodriguez',
    date: '22 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    poster:
      'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Travel',
    title: 'The Best Places to Visit in Europe',
    description: 'Discover the top destinations in Europe and plan your dream vacation.',
    author: 'Alex Johnson',
    date: '19 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
    poster:
      'https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Food',
    title: 'How to Make the Perfect Cup of Coffee',
    description:
      'Learn the secrets to making the perfect cup of coffee and impress your friends and family.',
    author: 'Thomas Lee',
    date: '16 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    poster:
      'https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
  },
  {
    category: 'Fashion',
    title: 'The Latest Fashion Trends for Spring 2023',
    description:
      'Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.',
    author: 'Jessica Kim',
    date: '13 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    poster:
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    category: 'Sports',
    title: 'The Benefits of Yoga for Athletes',
    description:
      'Learn how practicing yoga can improve your athletic performance and prevent injuries.',
    author: 'Michael Johnson',
    date: '10 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    poster:
      'https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
]

export function BlogPageOne() {


  return (
    <div>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-red-600 md:text-5xl md:leading-10">
            Events
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        {/*Upcoming event*/}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
        <div className="space-y-6">
          <p className="text-sm font-semibold md:text-base text-red-600"> UPCOMING EVENTS</p>
          <p className="text-3xl font-bold md:text-4xl"><span className='text-red-600'>Explore the World of Computer Science:</span>
            Join Our Interactive Workshop on Diverse Domains</p>
          <p className="text-base text-gray-600 md:text-lg">
            Discover the exciting world of computer science
            through our engaging workshop designed just for
            you! Dive into various domains such as Web
            Development, Artificial Intelligence ,Cybersecurity,
            and more. This is your chance to explore different
            fields, understand what sparks your interest, and
            find the path that best suits your passion and skills.
            Don’t miss out on this opportunity to gain valuable
            insights and set the stage for your future career in
            tech!
          </p>
          <button
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Now
          </button>
        </div>
        <div className="md:mt-o mt-10 w-full  object-contain">
          <img
            src={a2}
            alt="Getting Started"
            className="rounded-lg"
          />
        </div>
      </div>
      <p className="text-3xl font-bold text-red-600 md:text-5xl md:leading-10">
            Old Events
          </p>
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
