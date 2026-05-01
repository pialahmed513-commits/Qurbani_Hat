import React from 'react';
import { LuSearch, LuScale, LuClipboardCheck } from "react-icons/lu";
import { PiMosque } from "react-icons/pi";

const QurbaniTips = () => {
    return (
        <section className="bg-[#fdfcf0] py-20 px-6">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] font-serif mb-4">Qurbani Tips</h2>
                <p className="text-gray-600 text-lg">Everything you need for a proper and blessed Qurbani</p>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
            </div>

            {/* Tips Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Tip 1 */}
                <div className="bg-[#1a2e1a] p-8 rounded-[32px] text-white flex flex-col items-start shadow-xl transition-transform hover:-translate-y-2 duration-300">
                    <LuSearch className="text-4xl mb-6 text-blue-300" />
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">Choose Healthy Animals</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Look for bright eyes, smooth coat, and active behavior. Avoid lethargic or limping animals.
                    </p>
                </div>

                {/* Tip 2 */}
                <div className="bg-[#1a2e1a] p-8 rounded-[32px] text-white flex flex-col items-start shadow-xl transition-transform hover:-translate-y-2 duration-300">
                    <LuScale className="text-4xl mb-6 text-yellow-400" />
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">Check Weight & Age</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        For cows, minimum age is 2 years. Goats and sheep must be at least 1 year old.
                    </p>
                </div>

                {/* Tip 3 */}
                <div className="bg-[#1a2e1a] p-8 rounded-[32px] text-white flex flex-col items-start shadow-xl transition-transform hover:-translate-y-2 duration-300">
                    <LuClipboardCheck className="text-4xl mb-6 text-orange-200" />
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">Verify Documentation</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Always request health certificates and vaccination records from the seller before booking.
                    </p>
                </div>

                {/* Tip 4 */}
                <div className="bg-[#1a2e1a] p-8 rounded-[32px] text-white flex flex-col items-start shadow-xl transition-transform hover:-translate-y-2 duration-300">
                    <PiMosque className="text-4xl mb-6 text-green-300" />
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">Niyyah & Intention</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Make your intention (niyyah) sincerely for Allah's pleasure before performing Qurbani.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default QurbaniTips;