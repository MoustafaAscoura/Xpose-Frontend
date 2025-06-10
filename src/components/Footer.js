import React from "react";

const Footer = () => {
  return (
    <footer className="bg-xpose-darker text-xpose-text-secondary py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-xpose-green">Xpose</span>
          </div>

          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="hover:text-xpose-green transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-xpose-green transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-xpose-green transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} xpose AI. All rights reserved.
          </p>
          <p className="mt-2">
            Protecting truth in the age of synthetic media.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
