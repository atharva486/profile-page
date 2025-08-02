import React from 'react';
import About from './about';
import Skill from './skill';

function Home() {
  return (
    <div
      id="home"
      className="w-full bg-zinc-950 h-[100dvh] flex flex-col items-center pt-[15vmin] px-4"
    >
      <img
        src="/profile-photo.jpg"
        alt="img"
        className="h-[35vmin] w-[35vmin] rounded-full object-center border-4 animate-bounce border-white shadow-lg"
        style={{ animationDuration: '6s' }}
      />
      <div className="w-full mt-4 text-center">
        <p className="font-bold text-sky-600 text-2xl">Atharva Datta Ghogare</p>
        <p className="text-white font-bold text-4xl mt-3">Full Stack Developer</p>
        <div className="max-w-md w-full mx-auto my-5">
          <p className="text-white font-semibold text-md text-center">
            Passionate about creating beautiful, functional, and user-centered digital experiences. I bring ideas to life through code and design.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 text-white text-md mt-4">
        <a href="#about">
          <button className="w-48 bg-[#0c20f7] text-[18px] px-2 py-2 rounded-2xl hover:bg-blue-700 transition-transform duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_48px_5px_rgba(59,130,246,0.7)]">
            Learn More
          </button>
        </a>
        <a href="#contact">
          <button
            onClick={() => Skill()}
            className="w-48 border-2 text-[18px] px-2 py-2 rounded-2xl border-[#7339c9] bg-transparent hover:border-[#df91fe] transition-transform duration-300 hover:scale-110 shadow-md hover:shadow-[0_0_48px_5px_rgba(59,130,246,0.7)]"
          >
            Get In Touch
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
