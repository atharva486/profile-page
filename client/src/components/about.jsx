import React from 'react'
import { Code, Palette, Rocket, Heart } from 'lucide-react';
function About() {
  const highlights = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code", color: "text-blue-400" },
    { icon: Palette, title: "UI/UX Design", description: "Creating intuitive user experiences", color: "text-purple-400" },
    { icon: Rocket, title: "Innovation", description: "Always exploring new technologies", color: "text-cyan-400" },
    { icon: Heart, title: "Passion", description: "Love what I do and it shows", color: "text-pink-400" }
  ];
  const stats = [
    { title: "Projects Completed", value: "15+" },
    { title: "Tech Stack Mastered", value: "MERN, Tailwind CSS,REST APIs" },
    { title: "Learning Hours", value: "1000+" },
    { title: "Cups of Coffee", value: "∞" }
  ];

  return (
    <>
    <div id='about' className='w-full bg-zinc-950   text-white  h-[120vh] py-20'>
          <p className='w-full text-4xl font-bold text-white text-center'>About Me</p>
          <p className='w-1/2 mx-auto text-center text-white py-5'>Passionate student developer focused on building impactful web applications. I enjoy turning complex ideas into clean, user-friendly solutions.</p>
<div className='w-full flex flex-row  justify-around '>
            {highlights.map((item, index) => {
              return (
                <div className='w-[15%] bg-transparent flex gap-5 flex-col group border-1 border-white text-center  py-5 my-5 rounded-4xl transition-transform duration-500 hover:scale-120 hover:bg-[#0b192a]  text-wrap'>
                  < item.icon className={`h-18 w-full mx-auto ${item.color}   hover:animate-bounce `} style={{ animationDuration: '2s' }} />
                  <p className='text-white'>{item.title}</p>
                  <p className='text-zinc-500'>{item.description}</p>
                </div>
              )
            })}
          </div>
          <div className='mt-20 flex flex-row justify-between bg-transparent mx-10'>
            <div className='mt-15  p-5'>
              <p className='text-3xl font-bold mb-5'>My Journey</p>
              <ul className='list-disc px-5 space-y-3.5 text-lg '>
                <li className='marker:text-blue-700'>Discovered coding in college and got hooked on solving real-world problems.</li>
                <li className='marker:text-blue-700'>Built multiple personal and collaborative projects to sharpen my skills.</li>
                <li className='marker:text-blue-700'>Always learning and exploring the latest tools and technologies in web development.</li>
              </ul>
            </div>
            <div className='w-[40%] border border-white rounded-2xl p-5 bg-gradient-to-r from-[#6a8dca] to-[#4539e8]'>
              <p className='text-3xl font-semibold mb-6'>Quick Stats</p>
              {stats.map((item, index) => {
                return (
                  <div className='w-full  flex justify-between mb-2 mx-0 text-lg '>
                    <p>{item.title}</p>
                    <p>{item.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </>
  )
}

export default About
