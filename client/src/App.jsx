import { useState, useEffect } from 'react'
import About from './components/about';
import Skill from './components/skill';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = document.getElementById('home').offsetHeight;
      const scrollY = window.scrollY;
      setShowMenu(scrollY > homeHeight / 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='p-0 m-0 w-full min-h-screen flex flex-col'>
        <nav className={`${showMenu ? 'w-1/4' : 'w-0'}  h-12 fixed top-1/24 right-3/8  rounded-3xl text-xl flex justify-around flex-row bg-zinc-800 overflow-hidden transition-all duration-1000  z-100`}>
          <a href="#home" className="block py-2  text-white hover:border-b-4 duration-300  transition-all border:gradient-to-r from-black to-black hover:from-#3b82f6 hover:to-#9333ea">Home</a>
          <a href="#about" className="block py-2  text-white hover:border-b-4 duration-300  transition-all border:gradient-to-r from-black to-black hover:from-#3b82f6 hover:to-#9333ea">About</a>
          <a href="#skill" className="block py-2  text-white hover:border-b-4 duration-300  transition-all border:gradient-to-r from-black to-black hover:from-#3b82f6 hover:to-#9333ea">Skill</a>
          <a href="#contact" className="block py-2  text-white hover:border-b-4 duration-300  transition-all border:gradient-to-r from-black to-black hover:from-#3b82f6 hover:to-#9333ea">Contact</a>
        </nav>
        <div className='p-0 m-0 w-full min-h-screen'>
        <Home />
        <About />
        <Skill />
        <Contact />
        </div>
      </div>
    </>
  )
}

export default App
