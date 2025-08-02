import { useState, useEffect } from 'react';
import About from './components/about';
import Skill from './components/skill';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = document.getElementById('home')?.offsetHeight || 0;
      const scrollY = window.scrollY;
      setShowMenu(scrollY > homeHeight / 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-0 m-0 w-full min-h-screen flex flex-col">
      <nav
        className={`${showMenu ? 'w-[85vw] md:w-1/3' : 'w-0'} h-14 fixed top-4 right-4 rounded-3xl text-base flex flex-wrap justify-center gap-2 items-center bg-zinc-800 overflow-hidden transition-all duration-700 z-[100] px-2`}>
        <a href="#home" className="text-white px-3 py-2 hover:border-b-4 hover:border-blue-500 transition-all duration-300">Home</a>
        <a href="#about" className="text-white px-3 py-2 hover:border-b-4 hover:border-purple-500 transition-all duration-300">About</a>
        <a href="#skill" className="text-white px-3 py-2 hover:border-b-4 hover:border-green-500 transition-all duration-300">Skill</a>
        <a href="#contact" className="text-white px-3 py-2 hover:border-b-4 hover:border-pink-500 transition-all duration-300">Contact</a>
      </nav>


      <div className="p-0 m-0 w-full min-h-screen">
        <Home />
        <About />
        <Skill />
        <Contact />
      </div>
    </div>
  );
}

export default App;
