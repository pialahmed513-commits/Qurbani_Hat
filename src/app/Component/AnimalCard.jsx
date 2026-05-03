import { MdEditLocationAlt } from "react-icons/md";
import { FaWeightScale } from "react-icons/fa6";
import { MdCake } from "react-icons/md";
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {
    return (
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            
       
            <div className="bg-[#dcf3de] p-4 relative flex justify-center items-center h-64 overflow-hidden">
                <span className="absolute top-4 right-4 bg-[#1a2e1a] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase z-10">
                    {animal.type}
                </span>
                
                
                <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Info Section */}
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-[#1a2e1a] mb-4">{animal.name}</h3>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                    <div className="flex items-center gap-2 text-[12px] text-gray-600 bg-gray-50 p-2.5 rounded-xl font-medium transition-colors group-hover:bg-green-50">
                        <span className="opacity-70 text-base"><MdEditLocationAlt /></span> {animal.location}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-600 bg-gray-50 p-2.5 rounded-xl font-medium transition-colors group-hover:bg-green-50">
                        <span className="opacity-70 text-base"><FaWeightScale /></span> {animal.weight}kg
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-600 bg-gray-50 p-2.5 rounded-xl font-medium transition-colors group-hover:bg-green-50">
                        <span className="opacity-70 text-base"><MdCake /></span> {animal.age}yr
                    </div>
                </div>

                <div className="mb-6">
                    <span className="text-2xl font-black text-yellow-600">$ {animal.price?.toLocaleString()}</span>
                    <span className="text-gray-400 text-xs ml-1 font-medium">/ animal</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <Link 
                        href={`/all-animals/${animal.id}`} 
                        className="flex-1 py-3 border-2 border-[#1a2e1a] text-[#1a2e1a] rounded-2xl text-sm font-bold hover:bg-gray-50 transition-all text-center"
                    >
                        Details
                    </Link>              
                    
                    <Link 
                        href={`/login`}
                        className="flex-1 py-3 bg-[#1a2e1a] text-white rounded-2xl text-sm font-bold hover:bg-green-900 shadow-md hover:shadow-lg transition-all text-center"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;