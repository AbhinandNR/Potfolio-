import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';

const BottomNav = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: <FiHome size={22} /> },
    { path: '/about', label: 'About', icon: <FiUser size={22} /> },
    { path: '/projects', label: 'Projects', icon: <FiBriefcase size={22} /> },
    { path: '/contact', label: 'Contact', icon: <FiMail size={22} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl z-50">
      <nav className="flex justify-around items-center px-4 py-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'text-[#4F8EF7] bg-blue-50/50' 
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50/50'
              }`
            }
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default BottomNav;
