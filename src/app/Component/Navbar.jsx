"use client";
import { FaUserCircle } from "react-icons/fa";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, LogOut } from "lucide-react";

import { authClient } from '../lib/auth-client'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login"; 
        },
      },
    });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Animals', href: '/all-animals' },
  ];

  const activeClass = "text-yellow-500 font-bold";
  const inactiveClass = "text-white hover:text-yellow-500 transition-colors duration-300";

  return (
    <nav className="bg-[#1a2e1a] py-4 px-6 sticky top-0 z-50 shadow-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="text-2xl transform group-hover:rotate-12 transition-transform">🌙</span>
            <span className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tight">
              QurbaniHat
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            Livestock Booking Platform
          </p>
        </Link>

        {/* Desktop Links & Auth */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={pathname === link.href ? activeClass : inactiveClass}
              >
                {link.name}
              </Link>
            ))}
            {/* My Profile link added for logged in users */}
            {user && (
              <Link 
                href="/profile" 
                className={pathname === '/profile' ? activeClass : inactiveClass}
              >
                My Profile
              </Link>
            )}
          </div>

          <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400">Welcome,</span>
                <span className="text-sm font-semibold text-white">{user?.name || 'User'}</span>
              </div>
              <Link href="/profile">
                <img 
                  src={user?.image || 'https://via.placeholder.com/40'} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full border-2 border-yellow-500 p-0.5 object-cover" 
                />
              </Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-600/10 text-red-500 border border-red-600/20 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-bold"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link 
                href="/login" 
                className="text-white hover:text-yellow-500 transition-colors text-sm font-bold"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-yellow-600 text-[#1a2e1a] px-6 py-2.5 rounded-full font-bold hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all duration-300 text-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-yellow-500 p-2 hover:bg-white/5 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#142414] border-t border-white/5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="flex flex-col items-center gap-6 py-8 px-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg ${pathname === link.href ? activeClass : inactiveClass}`}
            >
              {link.name}
            </Link>
          ))}

          {user && (
            <Link 
              href="/profile" 
              onClick={() => setIsOpen(false)}
              className={`text-lg ${pathname === '/profile' ? activeClass : inactiveClass}`}
            >
              My Profile
            </Link>
          )}
          
          <div className="w-full h-[1px] bg-white/5"></div>

          {user ? (
              <div className="flex flex-col items-center gap-4">
                <Link href="/profile" onClick={() => setIsOpen(false)}>
                  <img 
                    src={user?.image} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full border-2 border-yellow-500 p-1" 
                  />
                </Link>
                <button 
                  onClick={() => { handleLogout(); setIsOpen(false); }} 
                  className="bg-red-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 font-bold w-full justify-center"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
          ) : (
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Link href="/login" onClick={() => setIsOpen(false)} className="text-center border border-yellow-500/30 text-yellow-500 py-3 rounded-xl font-bold">
                Login
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="text-center bg-yellow-600 text-[#1a2e1a] py-3 rounded-xl font-bold">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;