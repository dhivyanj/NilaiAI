import React from 'react';

const NilaiLanding = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-roboto overflow-hidden relative selection:bg-[#FF43D3] selection:text-white">
      
      {/* --- BACKGROUND AMBIENT EFFECTS --- */}
      {/* The requested Circular Translucent Bands of #FF43D3 and Blue */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Left Pink Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF43D3] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse-slow"></div>
        {/* Bottom Right Blue Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[130px] opacity-25"></div>
        {/* Center Middle Interaction */}
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-15"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="w-3 h-3 bg-[#FF43D3] rounded-full shadow-[0_0_10px_#FF43D3]"></span>
          Nilai AI
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Methodology</a>
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Contact</a>
        </div>
        <button className="px-5 py-2 rounded-full border border-gray-700 hover:border-[#FF43D3] hover:text-[#FF43D3] transition-all text-sm">
          Get Early Access
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF43D3] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            The Future of Well-Being
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Privacy-First AI for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
              Early Risk Detection
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Nilai AI detects early mental well-being risk patterns through passive, 
            behavioral intelligence without questionnaires or intrusive monitoring.
          </p>

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

      {/* --- IMPACT & BENEFITS SECTION --- */}
      <section className="relative z-10 py-24 bg-black/20 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact & Benefits</h2>
            <p className="text-gray-400 max-w-xl">
              How Nilai AI is redefining mental well-being support through ethical innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="group p-8 rounded-3xl bg-gray-900/40 border border-gray-800 hover:border-[#FF43D3]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,67,211,0.1)] backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF43D3] to-purple-600 flex items-center justify-center mb-6 text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF43D3] transition-colors">
                Proactive & Stigma-Free
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Shifts the focus from reactive crisis management to proactive prevention, empowering users with early self-insight while reducing stigma by analyzing behavioral patterns rather than assigning clinical diagnoses.
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
                Ethical AI Standardization
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Sets a benchmark for responsible AI by demonstrating that meaningful insights can be derived using privacy-first, non-invasive methods that strictly minimize data collection and prioritize user trust.
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
                Personalized Framework
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Challenges generic metrics by utilizing personalized baselines, offering educational and corporate institutions a scalable blueprint for early-signal support systems that respect diverse lifestyles.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Nilai AI. Prioritizing Privacy & Well-being.</p>
      </footer>
      
      {/* CSS Animation fix for Pulse (Optional if not in tailwind config) */}
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

export default NilaiLanding;