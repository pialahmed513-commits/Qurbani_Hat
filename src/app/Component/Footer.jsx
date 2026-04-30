"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa'; 
import { 
  HiOutlineLocationMarker, 
  HiOutlinePhone, 
  HiOutlineMail 
} from 'react-icons/hi'; // Hero Icons
import { FiClock } from 'react-icons/fi'; 

const Footer = () => {
  return (
    <footer className="bg-[#1a2e1a] text-white pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌙</span>
            <span className="text-xl font-bold text-yellow-500 uppercase tracking-wider">QurbaniHat</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Bangladesh's most trusted platform for booking Qurbani livestock. Verified farmers, healthy animals.
          </p>
          
         
          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaTwitter, href: "#" },
              { Icon: FaInstagram, href: "#" },
              { Icon: FaYoutube, href: "#" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-500 hover:text-[#1a2e1a] transition-all duration-300"
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </div>

   
        <div>
          <h3 className="text-yellow-500 font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/animals" className="hover:text-white transition-colors">All Animals</Link></li>
            <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
            <li><Link href="/register" className="hover:text-white transition-colors">Register</Link></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-yellow-500 font-bold uppercase tracking-widest mb-6 text-sm">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <HiOutlineLocationMarker size={20} className="text-yellow-500" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone size={20} className="text-yellow-500" />
              <span>+880 1700-000000</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail size={20} className="text-yellow-500" />
              <span>hello@qurbanihat.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FiClock size={18} className="text-yellow-500" />
              <span>9am — 8pm, Daily</span>
            </li>
          </ul>
        </div>

  
        <div>
          <h3 className="text-yellow-500 font-bold uppercase tracking-widest mb-6 text-sm">About</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We connect buyers with certified farmers across Bangladesh for a seamless and blessed Qurbani experience since 2022.
          </p>
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 QurbaniHat. Made with ❤️ for every Muslim family.</p>
      </div>
    </footer>
  );
};

export default Footer;