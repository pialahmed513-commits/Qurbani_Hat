"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const UpdateProfile = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const onUpdate = async (data) => {
        const { error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
        });

        if (error) {
            alert("Update failed: " + error.message);
        } else {
            alert("Information Updated Successfully!");
            router.push('/profile'); 
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcf0] flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1a2e1a] mb-6 text-center">Update Profile</h2>
                
                <form onSubmit={handleSubmit(onUpdate)} className="space-y-4">
               
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-[#1a2e1a] ml-1">New Name</label>
                        <input 
                            {...register("name")}
                            defaultValue={session?.user?.name}
                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-yellow-500"
                            placeholder="Enter your name"
                        />
                    </div>

                  
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-[#1a2e1a] ml-1">Profile Image URL</label>
                        <input 
                            {...register("image")}
                            defaultValue={session?.user?.image}
                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-yellow-500"
                            placeholder="https://example.com/photo.jpg"
                        />
                    </div>

                    
                    <button 
                        type="submit"
                        className="w-full py-4 bg-[#1a2e1a] text-white rounded-2xl font-bold hover:bg-green-900 transition-all shadow-lg mt-4"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;