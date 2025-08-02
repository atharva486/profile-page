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
      setShowMenu(window.scrollY > homeHeight / 4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 rounded-3xl bg-zinc-800 z-[100] overflow-hidden transition-all duration-700 flex justify-center items-center gap-2 ${showMenu ? 'px-3 py-2 max-w-[90vw]' : 'w-0 h-0 p-0'}`}>
        <a href="#home" className="text-white text-sm md:text-base px-2 py-1 hover:border-b-4 hover:border-blue-500 transition-all">Home</a>
        <a href="#about" className="text-white text-sm md:text-base px-2 py-1 hover:border-b-4 hover:border-purple-500 transition-all">About</a>
        <a href="#skill" className="text-white text-sm md:text-base px-2 py-1 hover:border-b-4 hover:border-green-500 transition-all">Skill</a>
        <a href="#contact" className="text-white text-sm md:text-base px-2 py-1 hover:border-b-4 hover:border-pink-500 transition-all">Contact</a>
      </nav>
      <Home />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
