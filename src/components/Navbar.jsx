import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleDropdown1 = () => {
    setDropdownOpen1((prev) => !prev);
    if (!isDropdownOpen1) {
      setDropdownOpen2(false);
      setDropdownOpen3(false);
    }
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2((prev) => !prev);
    if (!isDropdownOpen2) {
      setDropdownOpen1(false);
      setDropdownOpen3(false);
    }
  };
  const toggleDropdown3 = () => {
    setDropdownOpen3((prev) => !prev);
    if (!isDropdownOpen3) {
      setDropdownOpen1(false);
      setDropdownOpen2(false);
    }
  };

  return (
    <nav className="font-montserrat text-[14px] bg-white/80 backdrop-blur-[3px] border-b border-gray-100 fixed w-full top-0 z-50 transition-transform duration-300">
  
      <div className="container mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-4 flex items-center justify-between w-full">
        {/* Logo */}
        <a href="/">
          <img src="/logoo.svg" alt="logo" width={100} className="" />
        </a>

        {/* Links for Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/" className="text-black hover:text-gray-900 transition">
            Home
          </a>
          {/* <a href="/about" className="text-black hover:text-gray-900 transition">
            About
          </a> */}
          <a
            href="/membership"
            className="text-black hover:text-gray-900 transition"
          >
            Membership
          </a>

          {/* Dropdown Link 1 */}
          <div className="relative">
            <button
              onClick={toggleDropdown1}
              className="flex items-center space-x-1 cursor-pointer text-black hover:text-gray-900"
            >
              <span>Resources</span>
              <FiChevronDown />
            </button>
            {isDropdownOpen1 && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg animate-fadeIn">
                <a
                  href="/events"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Events
                </a>
                <a
                  href="/mentorship"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Mentorship
                </a>
              </div>
            )}
          </div>

          {/* Dropdown Link 2 */}
          <div className="relative">
            <button
              onClick={toggleDropdown2}
              className="flex items-center space-x-1 cursor-pointer text-black hover:text-gray-900"
            >
              <span>Our Team</span>
              <FiChevronDown />
            </button>
            {isDropdownOpen2 && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg animate-fadeIn">
                <a
                  href="/leadership"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Leadership
                </a>
                <a
                  href="/partners"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Partners
                </a>
              </div>
            )}
          </div>

          {/* Dropdown Link 3 */}
          <div className="relative">
            <button
              onClick={toggleDropdown3}
              className="flex items-center space-x-1 cursor-pointer text-black hover:text-gray-900"
            >
              <span>Projects</span>
              <FiChevronDown />
            </button>
            {isDropdownOpen3 && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg animate-fadeIn">
                <a
                  href="/foundation"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Foundation
                </a>
                <a
                  href="/gallery"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Gallery
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Donate Button */}
        <div className="hidden lg:block">
          <a
            href="/"
            className="bg-[#693e2d] rounded-full w-[100px] flex justify-center text-white py-4 px-20 hover:bg-[#985b3c] duration-200 mx-4"
          >
            DONATE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white pb-5 shadow-md">
          <a
            href="/"
            className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </a>
          {/* <a
            href="/about"
            className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-900"
          >
            About 
          </a> */}
          <a
            href="/membership"
            className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-900"
          >
            Membership
          </a>
          <div>
            <button
              onClick={toggleDropdown1}
              className="flex justify-between items-center w-full px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-900"
            >
              <span>Resources</span>
              <FiChevronDown />
            </button>
            {isDropdownOpen1 && (
              <div className="pl-4">
                <a
                  href="/events"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Events
                </a>
                <a
                  href="/mentorship"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Mentorship
                </a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleDropdown2}
              className="flex justify-between items-center w-full px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-900"
            >
              <span>Our Team</span>
              <FiChevronDown />
            </button>
            {isDropdownOpen2 && (
              <div className="pl-4">
                <a
                  href="/leadership"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Leadership
                </a>
                <a
                  href="/partners"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Partners
                </a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleDropdown3}
              className="flex justify-between items-center w-full px-4 py-2 text-black hover:bg-gray-100 hover:text-gray-900"
            >
              <span>Projects</span>
              <FiChevronDown />
            </button>
            {isDropdownOpen3 && (
              <div className="pl-4">
                <a
                  href="/foundation"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Foundation
                </a>
                <a
                  href="/gallery"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Gallery
                </a>
              </div>
            )}
          </div>
          <a
            href="/"
            className="bg-[#693e2d] rounded-full w-[100px] flex justify-center text-white py-4 px-20 hover:bg-[#985b3c] duration-200 mt-2 mx-4"
          >
            DONATE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
