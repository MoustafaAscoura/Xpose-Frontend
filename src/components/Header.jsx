import React, { useState, useEffect } from "react";
import logo from "./../assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`px-10 md:px-16 xl:px-24 flex justify-between items-center fixed top-0 left-0 right-0 z-50 text-xpose-text-primary py-4 h-20 xl:h-[108px] transition-all duration-300 bg-xpose-dark/70`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Digital hologram in hand"
          className="w-44 h-14 xl:w-54 xl:h-18 object-contain"
        />
      </div>
      <nav>
        <ul className="flex items-center space-x-6 text-sm lg:text-lg">
          <li>
            <a
              href="#hero"
              className="hover:text-xpose-green transition duration-300"
            >
              Why Xpose
            </a>
          </li>
          <li>
            <a
              href="#how-to"
              className="hover:text-xpose-green transition duration-300"
            >
              Deepfake Detection
            </a>
          </li>
          <li>
            <a
              href="#technology"
              className="hover:text-xpose-green transition duration-300"
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-xpose-green transition duration-300"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#upload"
              className="block w-fit cursor-pointer text-sm bg-white text-black font-medium px-3 py-1 rounded-lg hover:bg-xpose-lightblue transition duration-300"
            >
              Try it Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
