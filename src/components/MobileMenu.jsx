import { useEffect } from "react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return(
        <div className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>

            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
                >
                &times;
            </button>

            <a href="#News" 
            onClick={() => setMenuOpen(false)}
            className={`text-xl  text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"}
                        `}>News</a>

             
            <a href="#about"
            onClick={() => setMenuOpen(false)} 
            className={`text-xl  text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"}
                        `}>About</a>

            <a href="#Bootcamps"
            onClick={() => setMenuOpen(false)}
            className={`text-xl text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"}
                        `}>Bootcamps</a>

             <a href="#Tutorials"
            onClick={() => setMenuOpen(false)}
            className={`text-xl text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"}
                        `}>Tutorials</a>
            <a href="#connect"
            onClick={() => setMenuOpen(false)}
            className={`text-xl text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-100 translate-y-5"}
                        `}>Connect</a>

        </div>
    );

};