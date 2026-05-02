"use client";

import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { LuMoon } from 'react-icons/lu';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();

    const handleaLogin = async (data) => {
        console.log(data, "data");
         
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

       
        if (error) {
            alert(error.message || "wrong mail!");
            console.log("Login error:", error);
            return;
        }

      
        if (res) {
            alert("Login Success!");
        }
    };

    const signIn = async () => {
        const { data: res, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            alert("Google Faild!");
        }
    };

    return (
        <div className="min-h-screen bg-[#fdfcf0] flex items-center justify-center px-6 mb-10 mt-10">
            <div className="max-w-md w-full bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col items-center">
                
                {/* Title and Logo */}
                <div className="flex items-center gap-2 mb-2">
                    <LuMoon className="text-3xl text-yellow-500 fill-yellow-500" />
                    <h1 className="text-3xl font-bold text-[#1a2e1a] font-serif">QurbaniHat</h1>
                </div>
                <p className="text-gray-500 text-sm mb-8">Login to your account</p>

                {/* Login Form */}
                <form className="w-full space-y-4" onSubmit={handleSubmit(handleaLogin)}>
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-[#1a2e1a] ml-1">Email Address</label>
                        <input 
                            {...register("email")}
                            type="email" 
                            required
                            placeholder="email@example.com" 
                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500 focus:bg-white transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-bold text-[#1a2e1a] ml-1">Password</label>
                        <input 
                            {...register("password")}
                            type="password" 
                            required
                            placeholder="••••••" 
                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-500 focus:bg-white transition-all"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-4 bg-[#1a2e1a] text-white rounded-2xl font-bold hover:bg-green-900 transition-all shadow-lg mt-4"
                    >
                        Login
                    </button>
                </form>

                {/* Social Login */}
                <div className="w-full flex items-center gap-4 my-6">
                    <div className="flex-1 h-[1px] bg-gray-100"></div>
                    <span className="text-gray-400 text-xs uppercase">or</span>
                    <div className="flex-1 h-[1px] bg-gray-100"></div>
                </div>

                <button onClick={signIn} className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700">
                    <FcGoogle className="text-xl" />
                    Continue with Google
                </button>

                {/* Register Link */}
                <p className="mt-8 text-sm text-gray-500">
                    Don't have an account? 
                    <Link href="/register" className="text-green-700 font-bold hover:underline ml-1">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;