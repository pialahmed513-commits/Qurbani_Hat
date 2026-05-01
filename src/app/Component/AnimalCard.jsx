
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {
    return (
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col hover:shadow-md transition-all duration-300">
            
            {/* Animal Image Section */}
            <div className="bg-[#dcf3de] p-8 relative flex justify-center items-center h-48">
                <span className="absolute top-4 right-4 bg-[#1a2e1a] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {animal.type}
                </span>
                <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-32 h-32 object-contain"
                />
            </div>

            {/* Info Content Section */}
            <div className="p-5 flex-grow">
                <h3 className="text-lg font-bold text-[#1a2e1a] mb-4">{animal.name}</h3>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                    <div className="flex items-center gap-2 text-[11px] text-gray-600 bg-gray-50 p-2 rounded-lg font-medium">
                        <span className="opacity-70">📍</span> {animal.location}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-600 bg-gray-50 p-2 rounded-lg font-medium">
                        <span className="opacity-70">⚖️</span> {animal.weight}kg
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-600 bg-gray-50 p-2 rounded-lg font-medium">
                        <span className="opacity-70">🎂</span> {animal.age}yr
                    </div>
                </div>

                <div className="mb-6">
                    <span className="text-2xl font-bold text-yellow-600">$ {animal.price?.toLocaleString()}</span>
                    <span className="text-gray-400 text-xs ml-1 font-medium">/ animal</span>
                </div>

                {/* Action Buttons */}
            
         <div className="flex gap-2">
    <Link 
        href={`/all-animals/${animal.id}`} 
        className="flex-1 py-2.5 border border-[#1a2e1a] text-[#1a2e1a] rounded-xl text-sm font-bold hover:bg-gray-50 transition-all text-center"
    >
        Details
    </Link>              
    
    <button className="flex-1 py-2.5 bg-[#1a2e1a] text-white rounded-xl text-sm font-bold hover:bg-green-900 transition-all">
        Book Now
    </button>
           </div>
            </div>
        </div>
    );
};

export default AnimalCard;