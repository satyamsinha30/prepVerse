import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaBookOpen, FaTachometerAlt, FaClipboardList, FaQuestionCircle, FaFlask, FaTrophy, FaStickyNote, FaCalendarAlt, FaUserCircle, FaFire, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for authentication status
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Courses', path: '/courses', icon: <FaBookOpen /> },
    { name: 'Dashboard', path: '/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Daily Practice', path: '/practice', icon: <FaClipboardList /> },
    { name: 'Question Bank', path: '/question-bank', icon: <FaQuestionCircle /> },
    { name: 'Mock Tests', path: '/mock-tests', icon: <FaFlask /> },
    { name: 'Contests', path: '/contests', icon: <FaTrophy /> },
    { name: 'Notes', path: '/notes', icon: <FaStickyNote /> },
    { name: 'Planner', path: '/planner', icon: <FaCalendarAlt /> },
  ];

  // Conditionally add Profile or Login/Signup based on authentication status
  if (isLoggedIn) {
    navLinks.push({ name: 'Profile', path: '/profile', icon: <FaUserCircle /> });
  } else {
    navLinks.push({ name: 'Login/Signup', path: '/signup', icon: <FaUserCircle /> });
  }

  return (
    <nav className="bg-primary text-white p-4 shadow-lg sticky top-0 z-50 rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="/prepverse-logo.svg" alt="PrepVerse Logo" className="h-8 mr-2" />
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-1 hover:text-accent transition-colors duration-200 ${
                  isActive ? 'text-accent' : ''
                }`
              }
            >
              {link.icon}
              <span className="text-sm font-medium">{link.name}</span>
            </NavLink>
          ))}
          <div className="flex items-center space-x-1 text-accent font-bold text-lg">
            <FaFire />
            <span>15</span> {/* Placeholder for streak counter */}
          </div>
        </div>
      </div>

      {/* Mobile navigation (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-1 hover:text-accent transition-colors duration-200 p-2 rounded-lg ${
                  isActive ? 'text-accent bg-primary-dark' : ''
                }`
              }
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.icon}
              <span className="text-sm font-medium">{link.name}</span>
            </NavLink>
          ))}
          <div className="flex items-center space-x-1 text-accent font-bold text-lg p-2 rounded-lg">
            <FaFire />
            <span>15</span> {/* Placeholder for streak counter */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
