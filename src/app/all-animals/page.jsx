import React from 'react';
import AnimalCard from '../Component/AnimalCard';

const Allanimals = async ({ searchParams }) => {

    const { sort } = await searchParams;

    const res = await fetch('https://qurbani-hat-sepia.vercel.app/Data.json');
    const data = await res.json();

    
    let displayData = [...data];

    if (sort === 'low-to-high') {
        displayData.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-to-low') {
        displayData.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="bg-[#fdfcf0] min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Header and Sort */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-[#1a2e1a] font-serif">All Animals</h1>
                        <p className="text-gray-600 mt-2">Browse our full collection of Qurbani livestock</p>
                    </div>

                    {/* Simple Sorting UI */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-500">Sort by:</span>
                        <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                            <a 
                                href="/all-animals" 
                                className={`px-4 py-2 text-xs font-bold transition-all ${!sort ? 'bg-[#1a2e1a] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                Default
                            </a>
                            <a 
                                href="/all-animals?sort=low-to-high" 
                                className={`px-4 py-2 text-xs font-bold border-l border-gray-200 transition-all ${sort === 'low-to-high' ? 'bg-[#1a2e1a] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                Price: Low to High
                            </a>
                            <a 
                                href="/all-animals?sort=high-to-low" 
                                className={`px-4 py-2 text-xs font-bold border-l border-gray-200 transition-all ${sort === 'high-to-low' ? 'bg-[#1a2e1a] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                Price: High to Low
                            </a>
                        </div>
                    </div>
                </div>

                {/* Animals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {displayData.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Allanimals;