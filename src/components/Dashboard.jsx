import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-roboto flex">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 border-r border-white/5 bg-gray-900/30 backdrop-blur-md hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <span className="w-3 h-3 bg-[#FF43D3] rounded-full shadow-[0_0_10px_#FF43D3]"></span>
          <span className="text-xl font-bold tracking-tighter">Nilai AI</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#FF43D3]/10 text-[#FF43D3] rounded-xl text-sm font-medium border border-[#FF43D3]/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl text-sm font-medium transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Trends
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl text-sm font-medium transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            Settings
          </a>
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="text-sm">
              <div className="font-medium text-white">Demo User</div>
              <div className="text-xs text-gray-500">Student Account</div>
            </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Well-being Overview</h1>
            <p className="text-gray-400 text-sm mt-1">Passive monitoring active. Last update: Just now.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">Export Report</button>
          </div>
        </header>

        {/* --- METRICS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Metric 1: Risk Level */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 backdrop-blur-sm">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Current Risk Level</div>
            <div className="text-3xl font-bold text-green-400 flex items-center gap-2">
              Low
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Baseline deviation: &lt; 2%</p>
          </div>

          {/* Metric 2: Sleep Consistency */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 backdrop-blur-sm">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Sleep Regularity</div>
            <div className="text-3xl font-bold text-white">87%</div>
            <p className="text-xs text-gray-500 mt-2">Consistent with personal baseline</p>
          </div>

          {/* Metric 3: Digital Activity */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 backdrop-blur-sm">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Digital Rhythm</div>
            <div className="text-3xl font-bold text-white">Normal</div>
            <p className="text-xs text-gray-500 mt-2">No late-night spikes detected</p>
          </div>

          {/* Metric 4: Social Engagement */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 backdrop-blur-sm">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Social Pattern</div>
            <div className="text-3xl font-bold text-[#FF43D3]">Stable</div>
            <p className="text-xs text-gray-500 mt-2">Matches weekly average</p>
          </div>
        </div>

        {/* --- CHARTS SECTION (Placeholders) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-gray-900/50 border border-white/5 backdrop-blur-sm min-h-[300px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-white">Behavioral Deviation Trend</h3>
              <select className="bg-black/20 border border-white/10 rounded-lg text-xs px-2 py-1 text-gray-400 outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="w-full h-48 flex items-end justify-between gap-2 px-4">
              {[40, 65, 45, 50, 35, 55, 40, 60, 45, 50, 45, 40].map((h, i) => (
                <div key={i} className="w-full bg-gradient-to-t from-[#FF43D3]/20 to-[#FF43D3] rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 backdrop-blur-sm">
            <h3 className="font-bold text-white mb-4">Recent Insights</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-300">
                <span className="text-[#FF43D3] font-bold block text-xs mb-1">TODAY</span>
                Sleep onset was 45 mins later than your usual baseline.
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-300">
                <span className="text-blue-400 font-bold block text-xs mb-1">YESTERDAY</span>
                Activity levels remained within normal range.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;