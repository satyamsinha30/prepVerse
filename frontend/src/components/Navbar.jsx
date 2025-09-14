import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaBookOpen, FaTachometerAlt, FaClipboardList, FaQuestionCircle, FaFlask, FaTrophy, FaStickyNote, FaCalendarAlt, FaUserCircle, FaFire } from 'react-icons/fa';

const Navbar = () => {
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
    { name: 'Profile', path: '/profile', icon: <FaUserCircle /> },
  ];

  return (
    <nav className="bg-primary text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="/prepverse-logo.png" alt="PrepVerse Logo" className="h-8 mr-2" />
          PrepVerse
        </Link>
        <div className="flex items-center space-x-6">
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
    </nav>
  );
};

export default Navbar;
