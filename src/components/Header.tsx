import React, { useState } from "react";
// Solid icons
import {
  faClock,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faSearch,
  faUser,
  faTimes,
  faChevronRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

// Brand icons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // prevent scroll
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // restore scroll
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20">
        {/* Top contact bar */}
        <div className="hidden lg:flex w-full">
          <div className="bg-brand-dark text-white flex-grow flex justify-between items-center pl-4 pr-6">
            {/* Left Side: Address & Email */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 py-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-brand-primary"
                />
                <span>30 Commercial Road Fratton, Australia</span>
              </div>
              <div className="flex items-center space-x-2 py-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-brand-primary"
                />
                <span>needhelp@company.com</span>
              </div>
            </div>

            {/* Right Side (within dark bar): Timings */}
            <div className="flex items-center space-x-2 text-sm">
              <FontAwesomeIcon icon={faClock} className="text-brand-primary" />
              <span>Mon to Sat: 8.00 am - 7.00 pm</span>
            </div>
          </div>

          {/* Primary Color Section: Social Media */}
          <div className="bg-brand-primary text-white flex items-center space-x-6 px-6">
            <a href="#" className="hover:opacity-80">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:opacity-80">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:opacity-80">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="hover:opacity-80">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <nav>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex w-full items-stretch">
            {/* White Section (Left): Logo, Links, Start Booking */}
            <div className="bg-white flex-grow flex items-center justify-between px-6 py-6">
              {/* Logo & Nav Links Group */}
              <div className="flex items-center space-x-12">
                {/* --- Add Logo Here Once It Is Ready --- */}
                <h2 className="text-brand-primary text-3xl font-bold">
                  Vo<span className="text-black">yago</span>
                </h2>

                {/* Desktop Menu Links */}
                <div className="flex items-center space-x-8 text-gray-700">
                  <a href="#" className="hover:text-brand-primary">
                    Demos
                  </a>
                  <a href="#" className="hover:text-brand-primary">
                    About
                  </a>
                  <a href="#" className="hover:text-brand-primary">
                    Destinations
                  </a>
                  <a
                    href="#"
                    className="font-bold text-black border-b-2 border-brand-primary pb-1"
                  >
                    Tours
                  </a>
                  <a href="#" className="hover:text-brand-primary">
                    Pages
                  </a>
                  <a href="#" className="hover:text-brand-primary">
                    Shop
                  </a>
                  <a href="#" className="hover:text-brand-primary">
                    Blog
                  </a>
                  <a href="#" className="hover:text-brand-primary">
                    Contact
                  </a>
                </div>
              </div>

              {/* Start Booking Button */}
              <button className="start-booking-btn bg-brand-grey text-gray-800 px-6 py-3 mx-5 rounded-md font-semibold">
                Start Booking
              </button>
            </div>

            {/* Primary Color Section (Right): Call, Icons */}
            <div className="bg-brand-primary text-white flex items-center pr-6 py-6">
              {/* Call Section */}
              <div className="flex items-center px-6 h-full border-r border-white/20">
                <div className="mr-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs font-light">Call Anytime</p>
                  <p className="font-bold">(303) 555-0105</p>
                </div>
              </div>
              {/* Icons Section */}
              <div className="flex items-center space-x-4 px-4 h-full">
                <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
                <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden bg-white">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
              {/* --- Add Logo Here Once It Is Ready --- */}
              <h2 className="text-brand-primary text-3xl font-bold">
                Vo<span className="text-black">yago</span>
              </h2>

              {/* Mobile Menu Button (Hamburger) */}
              <button
                onClick={openMenu}
                id="open-menu-button"
                className="text-gray-600 focus:outline-none"
              >
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Side-Drawer Menu with Vertical Scrollbar */}
      <div
        id="side-drawer"
        className={`fixed top-0 left-0 h-full w-80 max-w-full bg-brand-dark text-white z-50 transform ${
          !isOpen ? "-translate-x-full" : ""
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-8">
            {/* --- Add Logo Here Once It Is Ready --- */}
            <h2 className="text-brand-primary text-3xl font-bold">
              Vo<span className="text-white">yago</span>
            </h2>
            <button
              id="close-menu-button"
              onClick={closeMenu}
              className="focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2">
            <a
              href="#"
              className="flex justify-between items-center py-3 border-b border-gray-700"
            >
              <span>Home</span>
              <span className="bg-brand-primary px-2 py-1">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-3 border-b border-gray-700"
            >
              <span>About</span>
              <span className="bg-brand-primary px-2 py-1">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-3 border-b border-gray-700"
            >
              <span>Destinations</span>
              <span className="bg-brand-primary px-2 py-1">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-3 border-b border-gray-700"
            >
              <span>Tours</span>
              <span className="bg-brand-primary px-2 py-1">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-3 border-b border-gray-700"
            >
              <span>Pages</span>
              <span className="bg-brand-primary px-2 py-1">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-3 border-b border-gray-700"
            >
              <span>Shop</span>
              <span className="bg-brand-primary px-2 py-1">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center py-3 border-b border-gray-700"
            >
              <span>Blog</span>
              <span className="bg-brand-primary px-2 py-1">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </span>
            </a>
            <a href="#" className="flex justify-between items-center py-3">
              <span>Contact</span>
            </a>
          </nav>

          {/* Contact Info */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-brand-primary text-xl"
              />
              <span>needhelp@trevlo.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="text-brand-primary text-xl"
              />
              <span>(303) 555-0105</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-8 pb-4">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      {/* Overlay for Side-Drawer */}
      <div
        onClick={closeMenu}
        id="menu-overlay"
        className={`fixed inset-0 bg-black/50 z-40 ${!isOpen ? "hidden" : ""}`}
      ></div>
    </>
  );
};

export default Header;
