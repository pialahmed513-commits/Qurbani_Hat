"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const AnimalDetailsPage = ({ params }) => {
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    
 
    const isLoggedIn = false; 

    
    const resolvedParams = React.use(params);
    const id = resolvedParams.id;

    useEffect(() => {
        const fetchAnimal = async () => {
            const res = await fetch('https://qurbani-hat-sepia.vercel.app/Data.json', {
                cache: 'no-store'
            });
            const data = await res.json();
            const found = data.find(a => a.id == id);
            setAnimal(found);
            setLoading(false);
        };
        fetchAnimal();
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        e.target.reset(); 
        toast.success('Booking Successful! We will contact you soon.', {
            style: { background: '#1a2e1a', color: '#fff' }
        });
    };

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (!animal) return <div className="text-center py-20 text-2xl font-bold">Animal Not Found!</div>;

    return (
        <div className="bg-[#fdfcf0] min-h-screen py-12 px-6">
            <Toaster />
            <div className="max-w-6xl mx-auto">
                {/* Animal Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-[#dcf3de] rounded-3xl p-10 flex justify-center border border-green-100 shadow-sm">
                        <img src={animal.image} alt={animal.name} className="w-full max-h-80 object-contain" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-[#1a2e1a] mb-4 font-serif">{animal.name}</h1>
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">{animal.description}</p>
                        
                        <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div>
                                <p className="text-sm text-gray-400 font-bold uppercase">Weight</p>
                                <p className="text-2xl font-bold text-[#1a2e1a]">{animal.weight}kg</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-bold uppercase">Age</p>
                                <p className="text-2xl font-bold text-[#1a2e1a]">{animal.age}yr</p>
                            </div>
                            <div className="col-span-2 pt-4 border-t border-gray-50">
                                <p className="text-sm text-gray-400 font-bold uppercase">Price</p>
                                <p className="text-3xl font-bold text-yellow-600">$ {animal.price?.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Form Section */}
                <div className="max-w-3xl mx-auto bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm">
                    {!isLoggedIn ? (
                        <div className="text-center py-4">
                            <div className="flex items-center justify-center gap-2 text-yellow-700 font-bold mb-6 bg-yellow-50 py-2 rounded-full text-sm">
                                🔒 You need to be logged in to book this animal
                            </div>
                            <Link href={`/login`}>
                            <button className="w-full py-4 bg-[#1a2e1a] text-white rounded-2xl font-bold hover:bg-green-900 transition-all">
                                Login to Book
                            </button>
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleBooking} className="space-y-6">
                            <h2 className="text-2xl font-bold text-center mb-6">Booking Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Full Name" required className="w-full p-4 rounded-xl bg-gray-50 border outline-none focus:border-green-500" />
                                <input type="email" placeholder="Email Address" required className="w-full p-4 rounded-xl bg-gray-50 border outline-none focus:border-green-500" />
                                <input type="tel" placeholder="Phone Number" required className="w-full p-4 rounded-xl bg-gray-50 border outline-none focus:border-green-500" />
                                <input type="text" placeholder="Address" required className="w-full p-4 rounded-xl bg-gray-50 border outline-none focus:border-green-500" />
                            </div>
                            <button type="submit" className="w-full py-4 bg-[#1a2e1a] text-white rounded-2xl font-bold hover:bg-green-900 transition-all">
                                Confirm Booking
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnimalDetailsPage;