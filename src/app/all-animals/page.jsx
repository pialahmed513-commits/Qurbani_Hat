import React from 'react';
import AnimalCard from '../Component/AnimalCard';

const Allanimals = async () => {
 
    const res = await fetch('https://qurbani-hat-sepia.vercel.app/Data.json', {
        cache: 'no-store' 
    });
    const data = await res.json();

    return (
        <div className="bg-[#fdfcf0] min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
            
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-[#1a2e1a] font-serif">All Available Animals</h1>
                    <p className="text-gray-600 mt-2">Browse our complete collection of healthy livestock for this Qurbani season.</p>
                    <div className="w-20 h-1 bg-yellow-500 mt-4"></div>
                </div>

             
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {data.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Allanimals;