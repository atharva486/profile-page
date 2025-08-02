import React from 'react';
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
    { title: "Tech Stack Mastered", value: "MERN, Tailwind CSS, REST APIs" },
    { title: "Learning Hours", value: "1000+" },
    { title: "Cups of Coffee", value: "∞" }
  ];

  return (
    <div id='about' className='w-full bg-zinc-950 text-white min-h-screen py-20 px-5'>
      <p className='text-4xl font-bold text-center'>About Me</p>
      <p className='max-w-2xl mx-auto text-center text-white py-5'>
        Passionate student developer focused on building impactful web applications. 
        I enjoy turning complex ideas into clean, user-friendly solutions.
      </p>

      <div className='w-full flex flex-wrap justify-center gap-6 my-10'>
        {highlights.map((item, index) => (
          <div
            key={index}
            className='w-64 bg-transparent flex flex-col items-center text-center gap-3 border border-white py-6 px-4 rounded-2xl transition-transform duration-500 hover:scale-105 hover:bg-[#0b192a]'
          >
            <item.icon className={`h-12 w-12 ${item.color} hover:animate-bounce`} style={{ animationDuration: '2s' }} />
            <p className='text-xl font-semibold'>{item.title}</p>
            <p className='text-zinc-400 text-sm'>{item.description}</p>
          </div>
        ))}
      </div>

      <div className='mt-20 flex flex-col md:flex-row justify-between items-start gap-10 mx-4'>
        <div className='md:w-1/2 p-4'>
          <p className='text-3xl font-bold mb-5'>My Journey</p>
          <ul className='list-disc px-5 space-y-4 text-lg'>
            <li className='marker:text-blue-700'>Discovered coding in college and got hooked on solving real-world problems.</li>
            <li className='marker:text-blue-700'>Built multiple personal and collaborative projects to sharpen my skills.</li>
            <li className='marker:text-blue-700'>Always learning and exploring the latest tools and technologies in web development.</li>
          </ul>
        </div>

        <div className='md:w-[40%] w-full border border-white rounded-2xl p-5 bg-gradient-to-r from-[#6a8dca] to-[#4539e8]'>
          <p className='text-3xl font-semibold mb-6'>Quick Stats</p>
          <div className='space-y-3 text-lg'>
            {stats.map((item, index) => (
              <div key={index} className='flex justify-between'>
                <p>{item.title}</p>
                <p className='font-semibold'>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
