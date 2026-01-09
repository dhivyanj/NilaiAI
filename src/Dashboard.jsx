import React, { useState, useEffect } from 'react';
import logoDark from '../res/logoDark.svg';
import logoLight from '../res/logoLight.svg';
import { getOverview, getPatterns, trackBehavior } from './services/api';

const Dashboard = ({ onNavigateHome, isDark, setIsDark }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [overview, setOverview] = useState(null);
  const [patterns, setPatterns] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const logo = isDark ? logoDark : logoLight;
  const userId = "user_123"; // Hardcoded for demo, would come from Auth in production

  // Fetch Live Data
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const periodVal = selectedPeriod === 'week' ? 7 : 30;
        
        // Fetch Overview and Patterns in parallel 
        const [overviewData, patternsData] = await Promise.all([
          getOverview(userId, periodVal),
          getPatterns(userId, periodVal)
        ]);

        if (isMounted) {
          if (!overviewData || !patternsData) {
            throw new Error("Unable to retrieve data.");
          }
          setOverview(overviewData);
          setPatterns(patternsData);
        }

        // Track user visit for analytics
        trackBehavior({
          user_id: userId,
          event_type: "dashboard_view",
          timestamp: new Date().toISOString()
        });

      } catch (err) {
        if (isMounted) {
          console.error("Dashboard Error:", err);
          setError("Failed to load live insights. Please check your connection.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [selectedPeriod]);

  // Helper function to colorize status text
  const getStatusColor = (status) => {
    if (!status) return 'text-gray-400';
    const s = status.toLowerCase();
    if (s.includes('stable') || s.includes('good') || s.includes('low')) return 'text-green-400';
    if (s.includes('improving')) return 'text-blue-400';
    return 'text-orange-400';
  };

  return (
    <div className={`min-h-screen font-roboto overflow-hidden relative transition-colors duration-300 ${
      isDark
        ? 'bg-gray-950 text-gray-100 selection:bg-[#FF43D3] selection:text-white'
        : 'bg-gray-50 text-gray-900 selection:bg-[#FF43D3] selection:text-white'
    }`}>
      
      {/* --- BACKGROUND AMBIENT EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] ${
          isDark ? 'bg-[#FF43D3] opacity-15' : 'bg-[#FF43D3] opacity-8'
        }`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px] ${
          isDark ? 'bg-blue-600 opacity-20' : 'bg-blue-300 opacity-10'
        }`}></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto ${
        isDark ? 'bg-gray-950/50 backdrop-blur-sm' : 'bg-white/50 backdrop-blur-sm'
      }`}>
        <button onClick={onNavigateHome} className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <span className="w-3 h-3 bg-[#FF43D3] rounded-full shadow-[0_0_10px_#FF43D3]"></span>
          <img src={logo} alt="Nilai AI" className="h-8 md:h-10" />
        </button>
        
        <div className="flex gap-3 items-center">
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`px-3 py-2 rounded-full border transition-all text-sm cursor-pointer ${
              isDark ? 'border-gray-700 hover:border-[#FF43D3]' : 'border-gray-300 hover:border-[#FF43D3]'
            }`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* LOADING STATE */}
          {loading && (
            <div className={`flex flex-col items-center justify-center py-32 rounded-3xl border backdrop-blur-md ${
              isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200'
            }`}>
              <div className="w-12 h-12 border-4 border-[#FF43D3] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Refreshing Usage Patterns...</p>
            </div>
          )}

          {/* ERROR STATE */}
          {error && !loading && (
            <div className="p-6 rounded-3xl border border-red-500/20 bg-red-500/10 text-center text-red-400">
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="mt-4 underline hover:text-white">Retry Connection</button>
            </div>
          )}

          {/* DASHBOARD CONTENT (Only render if data exists) */}
          {!loading && !error && overview && patterns && (
            <>
              {/* PAGE HEADER */}
              <div className="space-y-2">
                <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Well-Being Overview
                </h1>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Live analysis from your recent behavioral signals
                </p>
              </div>

              {/* OVERALL RISK CARD */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`md:col-span-2 p-8 rounded-3xl border backdrop-blur-md transition-colors ${
                  isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/40 border-gray-300'
                }`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                      <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Real-time Well-Being Score
                      </p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
                          {overview.score}
                        </span>
                        <span className={`text-2xl ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>/100</span>
                      </div>
                      <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Status: <span className={`font-medium ${getStatusColor(overview.status)}`}>{overview.status}</span>
                      </p>
                    </div>
                    <div className="text-right">
                       <div className="flex items-center gap-2 justify-end mb-2">
                         <div className={`w-3 h-3 rounded-full ${overview.status === 'Low Risk' ? 'bg-green-500' : 'bg-orange-500'} animate-pulse`}></div>
                         <span className="text-xs uppercase tracking-widest text-gray-500">Live API</span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        AI Confidence: {Math.round(overview.confidence * 100)}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* PERIOD SELECTOR */}
                <div className={`p-8 rounded-3xl border backdrop-blur-md flex flex-col justify-center ${
                  isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/40 border-gray-300'
                }`}>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Analysis Window</p>
                  <div className="space-y-2">
                    {['week', 'month'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                          selectedPeriod === period
                            ? 'bg-[#FF43D3] text-white shadow-lg'
                            : isDark 
                              ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {period === 'week' ? 'Last 7 Days' : 'Last 30 Days'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* BEHAVIORAL PATTERNS SECTION */}
              <section className="space-y-6">
                <div>
                  <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Behavioral Patterns
                  </h2>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Non-clinical metrics derived from passive signals
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Since API returns an object, we map keys manually to ensure correct order */}
                  
                  {/* 1. Sleep */}
                  <PatternCard 
                    title="Sleep Regularity" 
                    data={patterns.sleep_regularity} 
                    isDark={isDark} 
                    insight="Consistency of sleep start/end times."
                  />

                  {/* 2. Activity */}
                  <PatternCard 
                    title="Activity Engagement" 
                    data={patterns.activity_engagement} 
                    isDark={isDark} 
                    insight="Daily physical movement patterns."
                  />
                  
                  {/* 3. Social */}
                  <PatternCard 
                    title="Social Interaction" 
                    data={patterns.social_interaction} 
                    isDark={isDark} 
                    insight="Frequency of communication events."
                  />

                   {/* 4. Routine */}
                   <PatternCard 
                    title="Daily Routine" 
                    data={patterns.daily_routine} 
                    isDark={isDark} 
                    insight="Consistency of app usage and digital habits."
                  />
                </div>
              </section>

              {/* PRIVACY FOOTER */}
              <div className={`pt-8 border-t text-center ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
                 <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                   🔒 Privacy Verified: Only behavioral metadata was sent to the Nilai API. No content was analyzed.
                 </p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

// Sub-component for patterns to keep code clean
const PatternCard = ({ title, data, isDark, insight }) => {
  if (!data) return null;
  return (
    <div className={`group p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
      isDark
        ? 'bg-gray-900/40 border-gray-800 hover:border-[#FF43D3]/30'
        : 'bg-white/40 border-gray-300 hover:border-[#FF43D3]/30'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={`text-lg font-bold group-hover:text-[#FF43D3] transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>{title}</h3>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{insight}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
            {data.value}%
          </div>
          <span className={`text-xs font-bold uppercase tracking-wide ${
             (data.status || '').toLowerCase().includes('stable') ? 'text-green-400' : 'text-orange-400'
          }`}>
            {data.status}
          </span>
        </div>
      </div>
      <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}>
        <div 
          className="h-full rounded-full bg-gradient-to-r from-[#FF43D3] to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${data.value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;