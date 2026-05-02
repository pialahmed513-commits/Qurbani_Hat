import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
         
            <h1 className="text-[12rem] md:text-[20rem] font-bold text-[#1a2e1a] opacity-5 select-none">
                404
            </h1>
            
          
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e1a] mb-4 font-serif">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                
                <Link 
                    href="/" 
                    className="px-10 py-4 bg-[#1a2e1a] rounded-2xl font-bold hover:bg-green-900 transition-all shadow-xl inline-block"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}