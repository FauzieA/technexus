import { useState } from 'react';
import './App.css'
import { Loadingscreen } from './components/loadingscreen'
import "./index.css";
import { Navbar } from './components/Navbar';
import {MobileMenu} from './components/MobileMenu';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/about';
import {Tutorials} from './components/sections/Tutorials';
import { Connect } from './components/sections/Connect';
import { Bootcamps } from './components/sections/Bootcamps';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <> 
    { !isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />} {" "}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Bootcamps />
      <Tutorials />
      <Connect />
     
      </div>
    </>
  )
}

export default App
