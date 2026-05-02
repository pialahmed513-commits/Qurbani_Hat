import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#fdfcf0] flex flex-col items-center justify-center text-center px-6">
            {/* 404 Visual */}
            <h1 className="text-9xl font-bold text-[#1a2e1a] opacity-20">404</h1>
            
            <div className="absolute">
                <h2 className="text-3xl font-bold text-[#1a2e1a] mb-2 font-serif">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                
                <Link 
                    href="/" 
                    className="px-8 py-4 bg-[#1a2e1a] text-white rounded-2xl font-bold hover:bg-green-900 transition-all shadow-lg inline-block"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}