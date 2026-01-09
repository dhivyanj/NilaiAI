import React, { useState, useEffect } from 'react';
// Ensure this path matches your actual logo file. 
import logoDark from '../res/logoDark.svg';
import logoLight from '../res/logoLight.svg'; 

// --- MOCK API SERVICE (Internal fallback to prevent crashes) ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isDark, setIsDark] = useState(true);
  const logo = isDark ? logoDark : logoLight; }

const mockApiCall = (data, delay = 1000) => 
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

const Dashboard = ({ onNavigateHome, isDark = true, setIsDark = () => {} }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [overview, setOverview] = useState(null);
  const [patterns, setPatterns] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  
  // Mock Data Definition
  const mockAnalytics = {
    overview: {
      score: 78,
      status: 'Stable',
      lastUpdated: 'Jan 9, 2026',
      confidence: 0.87
    },
    patterns: [
      { name: 'Sleep Regularity', value: 72, status: 'stable', insight: 'Consistent sleep patterns detected' },
      { name: 'Activity Engagement', value: 58, status: 'declining', insight: 'Reduced engagement in activities' },
      { name: 'Social Interaction', value: 64, status: 'stable', insight: 'Stable social connection patterns' },
      { name: 'Daily Routine', value: 82, status: 'improving', insight: 'Strengthened daily routine' }
    ],
    insights: [
      {
        type: 'observation',
        title: 'Behavioral Pattern Detected',
        description: 'Early indicators suggest reduced engagement in physical activities over the past 5 days.',
        icon: '⚠️'
      },
      {
        type: 'suggestion',
        title: 'Recommended Action',
        description: 'Consider increasing outdoor activities or light exercise to maintain behavioral balance.',
        icon: '💡'
      },
      {
        type: 'positive',
        title: 'Positive Pattern',
        description: 'Sleep consistency has improved by 15% compared to the previous week.',
        icon: '✓'
      },
      {
        type: 'suggestion',
        title: 'Uncertainty Note',
        description: 'Analysis based on 5 days of data. Pattern reliability increases with more observations.',
        icon: 'ℹ️'
      }
    ]
  };

  // Fetch Logic
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await mockApiCall(null, 1500); 
        
        if (isMounted) {
          setOverview(mockAnalytics.overview);
          setPatterns(mockAnalytics.patterns);
          setError(null);
        }
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
        if (isMounted) setError('Failed to load insights. Please try again.');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [selectedPeriod]);

  return (
    <div className={`min-h-screen font-roboto overflow-hidden relative transition-colors duration-300 ${
      isDark
        ? 'bg-gray-950 text-gray-100 selection:bg-[#FF43D3] selection:text-white'
        : 'bg-gray-50 text-gray-900 selection:bg-[#FF43D3] selection:text-white'
    }`}>
      
      {/* --- BACKGROUND AMBIENT EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] transition-opacity duration-500 ${
          isDark ? 'bg-[#FF43D3] opacity-20' : 'bg-[#FF43D3] opacity-10'
        }`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px] transition-opacity duration-500 ${
          isDark ? 'bg-blue-600 opacity-25' : 'bg-blue-400 opacity-15'
        }`}></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto backdrop-blur-md transition-colors duration-300 ${
        isDark ? 'bg-gray-950/50' : 'bg-white/50 border-b border-gray-200'
      }`}>
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="w-3 h-3 bg-[#FF43D3] rounded-full shadow-[0_0_10px_#FF43D3]"></span>
          <img src={logo} alt="Nilai AI" className="h-8 md:h-10" />
        </button>
        
        <div className={`hidden md:flex gap-8 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Settings</a>
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#FF43D3] transition-colors">Help</a>
        </div>

        <div className="flex gap-3 items-center">
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`px-3 py-2 rounded-full border transition-all text-sm cursor-pointer ${
              isDark
                ? 'border-gray-700 hover:border-[#FF43D3] hover:text-[#FF43D3] text-gray-300'
                : 'border-gray-300 hover:border-[#FF43D3] hover:text-[#FF43D3] text-gray-600'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          
          <button className={`px-5 py-2 rounded-full border transition-all text-sm font-medium ${
            isDark
              ? 'border-gray-700 hover:border-[#FF43D3] hover:text-[#FF43D3] text-gray-300'
              : 'border-gray-300 hover:border-[#FF43D3] hover:text-[#FF43D3] text-gray-700'
          }`}>
            Profile
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* LOADING STATE */}
          {loading && (
            <div className={`flex items-center justify-center py-32 rounded-3xl border backdrop-blur-md ${
              isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200'
            }`}>
              <div className="text-center space-y-4">
                <div className="inline-block">
                  <div className="w-12 h-12 border-4 border-[#FF43D3] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Analyzing patterns...</p>
              </div>
            </div>
          )}

          {/* ERROR STATE */}
          {error && !loading && (
            <div className={`p-6 rounded-3xl border text-center ${
              isDark ? 'bg-red-500/10 border-red-500/20 text-red-300' : 'bg-red-50 border-red-200 text-red-600'
            }`}>
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="mt-4 underline">Retry</button>
            </div>
          )}

          {/* DASHBOARD CONTENT */}
          {!loading && !error && (
            <>
              {/* PAGE HEADER */}
              <div className="space-y-2">
                <h1 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Well-Being Overview
                </h1>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Analyze your behavioral patterns to identify well-being trends
                </p>
              </div>

              {/* OVERALL RISK CARD */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`md:col-span-2 p-8 rounded-3xl border backdrop-blur-md transition-colors ${
                  isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200 shadow-sm'
                }`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                      <p className={`text-sm mb-2 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Overall Well-Being Score
                      </p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
                          {overview?.score}
                        </span>
                        <span className={`text-2xl ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>/100</span>
                      </div>
                      <p className={`text-sm mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Status: <span className="text-green-500 font-bold">{overview?.status}</span>
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <p className={`text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        Last analyzed: {overview?.lastUpdated}
                      </p>
                      <div className="flex items-center gap-2 justify-end">
                        <div className="flex gap-1">
                          {Array(Math.round((overview?.confidence || 0) * 5)).fill(0).map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-[#FF43D3]"></div>
                          ))}
                        </div>
                        <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {Math.round((overview?.confidence || 0) * 100)}% confidence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TIME PERIOD SELECTOR */}
                <div className={`p-8 rounded-3xl border backdrop-blur-md flex flex-col justify-center transition-colors ${
                  isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200 shadow-sm'
                }`}>
                  <p className={`text-sm mb-4 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Analysis Period
                  </p>
                  <div className="space-y-2">
                    {['week', 'month', '3months'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                          selectedPeriod === period
                            ? 'bg-[#FF43D3] text-white shadow-lg shadow-[#FF43D3]/20'
                            : isDark 
                              ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {period === 'week' && 'Last 7 Days'}
                        {period === 'month' && 'Last 30 Days'}
                        {period === '3months' && 'Last 90 Days'}
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
                  {patterns?.map((pattern, idx) => (
                    <div 
                      key={idx}
                      className={`group p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
                        isDark
                          ? 'bg-gray-900/40 border-gray-800 hover:border-[#FF43D3]/30'
                          : 'bg-white/60 border-gray-200 hover:border-[#FF43D3]/30 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`text-lg font-bold group-hover:text-[#FF43D3] transition-colors ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {pattern.name}
                          </h3>
                          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {pattern.insight}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
                            {pattern.value}%
                          </div>
                          <span className={`text-xs font-bold uppercase tracking-wide ${
                            pattern.status === 'stable' ? 'text-blue-400' :
                            pattern.status === 'improving' ? 'text-green-400' :
                            'text-orange-400'
                          }`}>
                            {pattern.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-[#FF43D3] to-blue-500 transition-all duration-1000 ease-out"
                          style={{ width: `${pattern.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* INSIGHTS & SUGGESTIONS */}
              <section className="space-y-6">
                <div>
                  <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    AI Observations
                  </h2>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Transparent insights based on your recent data
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockAnalytics.insights.map((insight, idx) => (
                    <div 
                      key={idx}
                      className={`p-6 rounded-2xl border backdrop-blur-md transition-colors ${
                        insight.type === 'observation'
                          ? isDark ? 'bg-yellow-500/5 border-yellow-500/20' : 'bg-yellow-50 border-yellow-200'
                          : insight.type === 'positive'
                          ? isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200'
                          : isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="flex gap-4">
                        <span className="text-2xl flex-shrink-0">{insight.icon}</span>
                        <div>
                          <h4 className={`font-bold mb-1 ${
                            insight.type === 'observation'
                              ? 'text-yellow-600 dark:text-yellow-400'
                              : insight.type === 'positive'
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-blue-600 dark:text-blue-400'
                          }`}>
                            {insight.title}
                          </h4>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {insight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* DATA TRANSPARENCY CARD */}
              <section className={`p-8 rounded-3xl border backdrop-blur-md space-y-6 ${
                isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200 shadow-sm'
              }`}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">🔒</span>
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Privacy Assurance
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Analysis performed locally where possible',
                        'No raw message content is ever accessed',
                        'You can wipe your data at any time'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="text-[#FF43D3] text-sm font-bold">✓</span>
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pb-8 pt-4">
                <button className={`px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl ${
                  isDark 
                    ? 'bg-[#FF43D3] hover:bg-[#d934b1] text-white shadow-[#FF43D3]/20' 
                    : 'bg-[#FF43D3] hover:bg-[#d934b1] text-white shadow-[#FF43D3]/30'
                }`}>
                  Export My Insights
                </button>
                <button className={`px-8 py-4 rounded-full font-medium transition-all border ${
                  isDark 
                    ? 'bg-transparent border-gray-700 hover:bg-gray-800 text-white' 
                    : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}>
                  Learn More
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;