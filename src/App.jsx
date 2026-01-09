import React, { useState } from 'react';
// Ensure this component exists
import Dashboard from './Dashboard';
// Ensure this path matches where your logo is stored
import logo from '../res/logo.svg'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  // Page Routing: Switches to Dashboard if state changes
  if (currentPage === 'dashboard') {
    return <Dashboard onNavigateHome={() => setCurrentPage('landing')} />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-roboto overflow-hidden relative selection:bg-[#FF43D3] selection:text-white">
      
      {/* --- BACKGROUND AMBIENT EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF43D3] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[130px] opacity-25"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-15"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#FF43D3] rounded-full shadow-[0_0_10px_#FF43D3]"></span>
          <img src={logo} alt="Nilai AI" className="h-8 md:h-10" />
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Methodology</a>
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Contact</a>
        </div>
        <button 
          onClick={() => setCurrentPage('dashboard')}
          className="px-5 py-2 rounded-full border border-gray-700 hover:border-[#FF43D3] hover:text-[#FF43D3] transition-all text-sm cursor-pointer"
        >
          Continue
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Top Pill / Tagline */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF43D3] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            Nilai AI
          </div>
          
          {/* Sub-headline */}
          <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Understanding Well-Being, Respecting Privacy
          </h2>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Privacy-First AI for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
              Early Well-Being Awareness
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Nilai AI identifies subtle behavioral patterns to surface early signs of mental imbalance — without surveys, interruptions, or intrusive monitoring. Designed to be quiet, ethical, and proactive, Nilai AI supports well-being before concerns grow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-[#FF43D3] hover:bg-[#d934b1] text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,67,211,0.3)]">
              Discover the Tech
            </button>
            <button className="px-8 py-4 bg-transparent border border-gray-700 hover:bg-gray-800 text-white rounded-full font-medium transition-all">
              Read Research
            </button>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID (Cards) --- */}
      <section className="relative z-10 py-24 bg-black/20 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="group p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-[#FF43D3]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,67,211,0.1)] backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF43D3] to-purple-600 flex items-center justify-center mb-6 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF43D3] transition-colors">
                Early Awareness, Without Labels
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Moves mental well-being from crisis response to early awareness. Nilai AI encourages self-understanding by highlighting patterns instead of assigning clinical judgments, helping reduce stigma and promote openness.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                Responsible & Privacy-Led AI
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Demonstrates that powerful insights can come from minimal, respectful data use. Nilai AI is built to prioritize user trust through ethical design and non-intrusive intelligence.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-[#FF43D3]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,67,211,0.1)] backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-[#FF43D3] flex items-center justify-center mb-6 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF43D3] transition-colors">
                Personalized by Design
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Moves beyond one-size-fits-all metrics by adapting to individual behavior over time. This flexible framework supports diverse lifestyles and offers organizations a scalable approach to early well-being support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-gray-600 text-sm">
        <p className="flex items-center justify-center gap-3">
          <img src={logo} alt="Nilai AI" className="h-6" />
          <span>&copy; {new Date().getFullYear()} Nilai AI. Prioritizing Privacy & Well-being.</span>
        </p>
      </footer>
      
      {/* CSS Animation fix for Pulse (if not in tailwind config) */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default App;