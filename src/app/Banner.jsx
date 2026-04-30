"use client";

import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <header className="relative bg-[#2d5a27] min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
  
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }}
      ></div>
      
      <div className="z-10 max-w-5xl mx-auto">
   
        <div className="inline-block border border-yellow-500/50 rounded-full mt-10 px-4 py-1 bg-white/5 backdrop-blur-sm">
          <span className="text-yellow-400 text-sm font-medium">
            ✨ Eid ul Adha 2026 — Book Now
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Find Your Perfect <br /> 
          <span className="italic text-yellow-500">Qurbani Animal</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-sm md:text-lg leading-relaxed">
          Premium livestock sourced from trusted farmers across Bangladesh. 
          Healthy, verified, and ready for Qurbani.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2">
          <Link 
            href="/animals" 
            className="bg-[#c29a4a] text-[#1a2e1a] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
          >
             Browse Animals
          </Link>
          <button className="border border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-5 mb-14 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">500+</h3>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Animals Listed</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">12</h3>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Districts</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">2,400+</h3>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Happy Families</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">100%</h3>
            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Verified Farmers</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;