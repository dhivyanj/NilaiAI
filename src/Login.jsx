import React, { useState } from 'react';
import logoDark from '../res/logoDark.svg';
import logoLight from '../res/logoLight.svg';
import { getOverview } from './services/api';

// Login shows the app's full UI shell (background, nav, hero/footer)
// Props:
// - onLogin(userId): required callback to switch to the dashboard
// - setUserId(userId): optional callback to persist the user id in parent state
// - isDark: theme flag
// - setIsDark: theme toggle
const Login = ({ onLogin, setUserId, isDark = true, setIsDark = () => {} }) => {
  const [userIdInput, setUserIdInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const logo = isDark ? logoDark : logoLight;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const userId = userIdInput.trim();
    if (!userId) {
      setError('Please enter a user id');
      return;
    }

    // Fixed password as requested
    const password = '0000';

    try {
      setLoading(true);
      if (typeof setUserId === 'function') setUserId(userId);

      // Warm up backend for this user (non-blocking for real app)
      await getOverview(userId, 7);

      if (typeof onLogin === 'function') onLogin(userId);
    } catch (err) {
      console.error('Login error', err);
      setError('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen font-roboto overflow-hidden relative transition-colors duration-300 ${
      isDark
        ? 'bg-gray-950 text-gray-100 selection:bg-[#FF43D3] selection:text-white'
        : 'bg-gray-50 text-gray-900 selection:bg-[#FF43D3] selection:text-white'
    }`}>

      {/* Background ambient effects (copied from App/Dashboard) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] ${
          isDark ? 'bg-[#FF43D3] opacity-15' : 'bg-[#FF43D3] opacity-8'
        }`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[130px] ${
          isDark ? 'bg-blue-600 opacity-20' : 'bg-blue-300 opacity-10'
        }`}></div>
      </div>

      {/* Navbar (from App/Dashboard) */}
      <nav className={`relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto ${
        isDark ? 'bg-gray-950/50 backdrop-blur-sm' : 'bg-white/50 backdrop-blur-sm'
      }`}>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#FF43D3] rounded-full shadow-[0_0_10px_#FF43D3]"></span>
          <img src={logo} alt="Nilai AI" className="h-8 md:h-10" />
        </div>
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

      {/* Main hero with login form (landing layout from App.jsx) */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className={`inline-block px-4 py-1.5 rounded-full border text-[#FF43D3] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-300'
          }`}>Nilai AI</div>

          <h2 className={`text-xl md:text-2xl font-light tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Understanding Well-Being, Respecting Privacy
          </h2>

          <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Privacy-First AI for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF43D3] to-blue-500">Early Well-Being Awareness</span>
          </h1>

          <p className={`text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Nilai AI identifies subtle behavioral patterns to surface early signs of mental imbalance — without surveys, interruptions, or intrusive monitoring.
          </p>

          {/* Login card placed beneath hero copy */}
          <div className="mt-6 w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className={`p-6 rounded-xl border ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200'}`}>
              <h3 className="text-lg font-bold mb-3">Sign in</h3>
              <label className="text-sm text-gray-400">User ID</label>
              <input
                value={userIdInput}
                onChange={(e) => setUserIdInput(e.target.value)}
                placeholder="Enter your user id"
                className="mt-2 mb-3 w-full px-3 py-2 border rounded-md bg-transparent"
              />
              <p className="text-xs text-gray-500 mb-4">Password is fixed to <strong>0000</strong></p>
              {error && <div className="text-red-400 text-sm mb-3">{error}</div>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 rounded-md bg-[#FF43D3] text-white font-medium hover:opacity-90"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer copied from App.jsx */}
      <footer className={`relative z-10 border-t py-12 text-center text-sm transition-colors duration-300 ${
        isDark ? 'border-white/5 text-gray-600' : 'border-gray-200 text-gray-500'
      }`}>
        <p className="flex items-center justify-center gap-3">
          <img src={logo} alt="Nilai AI" className="h-6" />
          <span>&copy; {new Date().getFullYear()} Nilai AI. Prioritizing Privacy & Well-being.</span>
        </p>
      </footer>
    </div>
  );
};

export default Login;
