import Image from 'next/image';
import Link from 'next/link';
import NotFoundImg from '@/assets/no-found.png'; // আপনার ইমেজ পাথ ঠিক রাখুন

export default function NotFound() {
  return (
    <div className="bg-[#f4f9f9] text-[#1e293b] min-h-screen flex flex-col ">
     
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="relative w-full aspect-square max-w-[400px]">
              
              <div className="absolute inset-0 bg-teal-100/50 rounded-full blur-3xl transform -translate-x-1/4"></div>
              <div className="absolute inset-0 bg-cyan-100/40 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
              
              {/* Main 404 Card */}
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-slate-100 shadow-xl  flex items-center justify-center">
                <Image 
                  alt="DocAppoint 404" 
                  className="w-full h-full object-cover rounded-lg opacity-30" 
                  src={NotFoundImg} 
                />
                
              </div>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="text-center md:text-left order-1 md:order-2">
           
            <h1 className="font-['Lexend'] text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Looks Like We Lost the Pulse!
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md">
              The page or doctor's schedule you are looking for might have been moved, canceled, or is currently unavailable. Let's get your health track back online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0284c7] text-white rounded-xl font-semibold shadow-lg shadow-sky-100 hover:bg-[#0369a1] active:scale-95 transition-all duration-200"
              >
                
                Back to Home
              </Link>
              
              <Link 
                href="/doctors" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e0f2fe] text-[#0369a1] border border-transparent rounded-xl font-semibold hover:bg-[#bae6fd] active:scale-95 transition-all duration-200"
              >
                
                Find a Doctor
              </Link>
            </div>

           
          </div>

        </div>
      </main>
    </div>
  );
}