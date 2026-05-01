import React from 'react';
import { GiCow, GiGoat, GiSheep } from "react-icons/gi";

const TopBreeds = () => {
    return (
        <section className="bg-[#fdfcf0] py-20 px-6">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] font-serif mb-4">Top Breeds</h2>
                <p className="text-gray-600 text-lg">Popular breeds available this season</p>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
            </div>

            {/* Breeds Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {/* Deshi Cow */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
                    <GiCow className="text-5xl text-[#1a2e1a] mb-4" />
                    <h3 className="text-lg font-bold text-[#1a2e1a]">Deshi Cow</h3>
                    <p className="text-xs text-gray-400 mt-1">Bogura, Pabna</p>
                    <p className="text-xs text-green-600 font-medium mt-2">Hardy local breed</p>
                </div>

                {/* Sahiwal */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
                    <GiCow className="text-5xl text-[#8B4513] mb-4" />
                    <h3 className="text-lg font-bold text-[#1a2e1a]">Sahiwal</h3>
                    <p className="text-xs text-gray-400 mt-1">Sirajganj</p>
                    <p className="text-xs text-green-600 font-medium mt-2">High-yield premium</p>
                </div>

                {/* Black Bengal */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
                    <GiGoat className="text-5xl text-[#1a2e1a] mb-4" />
                    <h3 className="text-lg font-bold text-[#1a2e1a]">Black Bengal</h3>
                    <p className="text-xs text-gray-400 mt-1">Mymensingh</p>
                    <p className="text-xs text-green-600 font-medium mt-2">Most popular goat</p>
                </div>

                {/* Merino Sheep */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
                    <GiSheep className="text-5xl text-gray-400 mb-4" />
                    <h3 className="text-lg font-bold text-[#1a2e1a]">Merino Sheep</h3>
                    <p className="text-xs text-gray-400 mt-1">Khulna</p>
                    <p className="text-xs text-green-600 font-medium mt-2">Fine wool & meat</p>
                </div>

                {/* Murrah Buffalo */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
                    <GiCow className="text-5xl text-black mb-4" />
                    <h3 className="text-lg font-bold text-[#1a2e1a]">Murrah Buffalo</h3>
                    <p className="text-xs text-gray-400 mt-1">Comilla</p>
                    <p className="text-xs text-green-600 font-medium mt-2">Heaviest breed</p>
                </div>

                {/* Barbari Goat */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
                    <GiGoat className="text-5xl text-[#1a2e1a] mb-4" />
                    <h3 className="text-lg font-bold text-[#1a2e1a]">Barbari Goat</h3>
                    <p className="text-xs text-gray-400 mt-1">Rajshahi</p>
                    <p className="text-xs text-green-600 font-medium mt-2">Premium quality</p>
                </div>

            </div>
        </section>
    );
};

export default TopBreeds;