import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Left: Logo */}
          <a href="#about" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
                 href="#"
                 onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                 className="hover:text-[#D6F80D] transition-colors"
                 >
                 News
            </a>

            <a href="#about" className="hover:text-[#D6F80D] transition-colors">
              About
            </a>
            <a href="#Bootcamps" className="hover:text-[#D6F80D] transition-colors">
              Bootcamps
            </a>
            <a href="#Tutorials" className="hover:text-[#D6F80D] transition-colors">
              Tutorials
            </a>
          </div>

          {/* Right: Join Us Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#connect"
              className="ml-4 px-7 py-1 bg-[#D6F80D] text-black rounded-sm hover:bg-[#D6F80D99] hover:text-black transition-all"
            >
              Join us
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
            className="md:hidden h-5 relative cursor-pointer z-40"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
        </div>
      </div>
    </nav>
  );
};
