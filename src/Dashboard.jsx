import React, { useState } from 'react';
import logoDark from '../res/logoDark.svg';
import logoLight from '../res/logoLight.svg';

const Dashboard = ({ onNavigateHome, isDark, setIsDark }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const logo = isDark ? logoDark : logoLight;

  const [overview, setOverview] = useState(null);
  const [patterns, setPatterns] = useState(null);
  const [insights, setInsights] = useState(null);

  return (
    <div className={`min-h-screen font-roboto overflow-hidden relative transition-colors duration-300 ${
      isDark
        ? 'bg-gray-950 text-gray-100 selection:bg-[#FF43D3] selection:text-white'
        : 'bg-white text-gray-900 selection:bg-[#FF43D3] selection:text-white'
    }`}>
      
      {/* --- BACKGROUND AMBIENT EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] ${
          isDark ? 'bg-[#FF43D3] opacity-15' : 'bg-[#FF43D3] opacity-8'
        }`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px] ${
          isDark ? 'bg-blue-600 opacity-20' : 'bg-blue-300 opacity-10'
        }`}></div>
        <div className={`absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-[100px] ${
          isDark ? 'bg-indigo-600 opacity-10' : 'bg-indigo-300 opacity-5'
        }`}></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto ${
        isDark 
          ? 'bg-gray-950/50 backdrop-blur-sm' 
          : 'bg-white/50 backdrop-blur-sm'
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
                ? 'border-gray-700 hover:border-[#FF43D3] hover:text-[#FF43D3]'
                : 'border-gray-300 hover:border-[#FF43D3] hover:text-[#FF43D3]'
            }`}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button className={`px-5 py-2 rounded-full border transition-all text-sm ${
            isDark
              ? 'border-gray-700 hover:border-[#FF43D3] hover:text-[#FF43D3]'
              : 'border-gray-300 hover:border-[#FF43D3] hover:text-[#FF43D3]'
          }`}>
            Profile
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* PAGE HEADER */}
          <div className="space-y-2">
            <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Well-Being Overview</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Analyze your behavioral patterns to identify well-being patterns</p>
          </div>

          {/* OVERALL RISK CARD */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`md:col-span-2 p-8 rounded-3xl border backdrop-blur-md ${
              isDark
                ? 'bg-gray-900/40 border-gray-800'
                : 'bg-white/40 border-gray-300'
            }`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Overall Well-Being Assessment</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
                      {mockAnalytics.overallRisk}
                    </span>
                    <span className={`text-2xl ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>/100</span>
                  </div>
                  <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Status: <span className="text-green-400 font-medium">{mockAnalytics.riskTrend}</span></p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm mb-2">Last analyzed: {mockAnalytics.lastUpdated}</p>
                  <div className="flex items-center gap-2 justify-end">
                    <div className="flex gap-1">
                      {Array(Math.round(mockAnalytics.confidence / 20)).fill(0).map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-[#FF43D3]"></div>
                      ))}
                    </div>
                    <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{mockAnalytics.confidence}% confidence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TIME PERIOD SELECTOR */}
            <div className={`p-8 rounded-3xl border backdrop-blur-md ${
              isDark
                ? 'bg-gray-900/40 border-gray-800'
                : 'bg-white/40 border-gray-300'
            }`}>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Analysis Period</p>
              <div className="space-y-2">
                {['week', 'month', '3months'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedPeriod === period
                        ? 'bg-[#FF43D3] text-white'
                        : isDark 
                          ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'

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
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Behavioral Patterns Analysis</h2>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Non-clinical metrics derived from your behavioral data</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAnalytics.patterns.map((pattern, idx) => (
                <div 
                  key={idx}
                  className={`group p-6 rounded-2xl border hover:border-gray-700 transition-all backdrop-blur-md ${
                    isDark
                      ? 'bg-gray-900/40 border-gray-800 hover:border-gray-700'
                      : 'bg-white/40 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-lg font-bold group-hover:text-[#FF43D3] transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{pattern.name}</h3>
                      <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{pattern.insight}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">
                        {pattern.value}%
                      </div>
                      <span className={`text-xs font-medium ${
                        pattern.status === 'stable' ? 'text-blue-400' :
                        pattern.status === 'improving' ? 'text-green-400' :
                        'text-orange-400'
                      }`}>
                        {pattern.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-[#FF43D3] to-blue-500 transition-all"
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
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Pattern Observations & Recommendations</h2>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Transparent insights based on your behavioral data</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAnalytics.insights.map((insight, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border backdrop-blur-md ${
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
                      <h4 className={`font-bold mb-2 ${
                        insight.type === 'observation'
                          ? 'text-yellow-600'
                          : insight.type === 'positive'
                          ? 'text-green-600'
                          : 'text-blue-600'
                      }`}>
                        {insight.title}
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DATA TRANSPARENCY */}
          <section className={`p-8 rounded-3xl border backdrop-blur-md space-y-6 ${
            isDark
              ? 'bg-gray-900/40 border-gray-800'
              : 'bg-white/40 border-gray-300'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🔒</span>
              <div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Data & Privacy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF43D3] text-sm font-bold mt-0.5">✓</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>All behavioral analysis is performed locally on your device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF43D3] text-sm font-bold mt-0.5">✓</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>No raw personal data is stored or transmitted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF43D3] text-sm font-bold mt-0.5">✓</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Insights are based on aggregated behavioral patterns only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF43D3] text-sm font-bold mt-0.5">✓</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>You maintain full control and can delete all data anytime</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Important Disclaimer */}
            <div className={`border-t pt-6 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
              <div className="flex gap-3">
                <span className="text-lg flex-shrink-0">⚠️</span>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Important:</span> This analysis is for personal insight only and does not provide medical diagnoses or clinical assessments. If you're experiencing significant distress, please consult a healthcare professional.
                </p>
              </div>
            </div>
          </section>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
            <button className="px-8 py-4 bg-[#FF43D3] hover:bg-[#d934b1] text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(255,67,211,0.3)]">
              Export My Insights
            </button>
            <button className="px-8 py-4 bg-transparent border border-gray-700 hover:bg-gray-800 text-white rounded-full font-medium transition-all">
              Learn More
            </button>
          </div>
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
}
