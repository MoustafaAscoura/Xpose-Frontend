import React, { useState, useEffect } from "react";
import logo from "./../assets/logo.png";
import menu from "./../assets/menu.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-screen transition-all duration-300  bg-xpose-dark/80`}
    >
      <div className="flex justify-between items-center px-6 py-4 md:px-16 xl:px-24 h-20 xl:h-[108px]">
        {/* Logo */}
        <img
          src={logo}
          alt="Digital hologram in hand"
          className="w-36 md:w-44 xl:w-54 h-auto object-contain"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 text-sm lg:text-lg text-xpose-text-primary">
            <li>
              <a href="#hero" className="hover:text-xpose-green transition">
                Why Xpose
              </a>
            </li>
            <li>
              <a href="#how-to" className="hover:text-xpose-green transition">
                Deepfake Detection
              </a>
            </li>
            <li>
              <a
                href="#technology"
                className="hover:text-xpose-green transition"
              >
                Technology
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-xpose-green transition">
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#upload"
                className="bg-white text-black px-3 py-1 rounded-lg font-medium hover:bg-xpose-lightblue transition"
              >
                Try it Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menu}
            alt="Digital hologram in hand"
            className="w-7 h-auto object-contain"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-white px-6 py-4 space-y-4 shadow-lg">
          <a
            href="#hero"
            className="block hover:text-xpose-green"
            onClick={() => setMenuOpen(false)}
          >
            Why Xpose
          </a>
          <a
            href="#how-to"
            className="block hover:text-xpose-green"
            onClick={() => setMenuOpen(false)}
          >
            Deepfake Detection
          </a>
          <a
            href="#technology"
            className="block hover:text-xpose-green"
            onClick={() => setMenuOpen(false)}
          >
            Technology
          </a>
          <a
            href="#faq"
            className="block hover:text-xpose-green"
            onClick={() => setMenuOpen(false)}
          >
            FAQs
          </a>
          <a
            href="#upload"
            className="block w-fit bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-xpose-lightblue transition"
            onClick={() => setMenuOpen(false)}
          >
            Try it Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
