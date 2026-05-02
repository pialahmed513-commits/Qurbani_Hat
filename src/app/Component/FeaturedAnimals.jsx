import React from 'react';
import AnimalCard from './AnimalCard';
export const dynamic = 'force-dynamic'
const FeaturedAnimals = async () => {
    
    const res = await fetch('https://qurbani-hat-sepia.vercel.app/Data.json', );
    const data = await res.json();
    
  
    const featured = data.slice(0, 4);

    return (
        <section className="bg-[#fdfcf0] py-16 px-6">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1a2e1a] mb-2 font-serif">Featured Animals</h2>
                <p className="text-gray-600">Hand-picked animals for Qurbani this season</p>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
            </div>

            {/* Animals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {featured.map((animal) => <AnimalCard key={animal.id} animal={animal}>
                    
                  
                </AnimalCard> 
                    
                )}
            </div>
        </section>
    );
};

export default FeaturedAnimals;