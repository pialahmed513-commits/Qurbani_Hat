"use client";
import React from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { User, Mail, Pencil } from 'lucide-react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    if (!user) return <div className="text-center mt-20">Please Login First</div>;

    return (
        <div className="min-h-screen bg-[#fdfcf0] py-20">
            <div className="max-w-md mx-auto bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col items-center">
              
                <div className="w-32 h-32 rounded-full border-4 border-yellow-500 overflow-hidden mb-6 flex items-center justify-center bg-gray-100">
                    {user.image ? (
                        <img src={user.image} alt="profile" className="w-full h-full object-cover" />
                    ) : (
                        <User size={50} className="text-gray-400" />
                    )}
                </div>

              
                <h1 className="text-2xl font-bold text-[#1a2e1a]">{user.name}</h1>
                <p className="text-gray-500 flex items-center gap-2 mb-8">
                    <Mail size={16} /> {user.email}
                </p>

                
                <Link href="/profile/update" className="w-full">
                    <button className="w-full py-4 bg-yellow-500 text-[#1a2e1a] rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all shadow-lg">
                        <Pencil size={18} /> Update Information
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;