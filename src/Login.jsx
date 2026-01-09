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

      {/* Minimal content: only the login textbox beneath the navbar */}
      <main className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className={`p-6 rounded-xl border ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200'}`}>
              <label className="text-sm text-gray-400">User ID</label>
              <input
                value={userIdInput}
                onChange={(e) => setUserIdInput(e.target.value)}
                placeholder="Enter your user id"
                className="mt-2 mb-3 w-full px-3 py-2 border rounded-md bg-transparent"
              />
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
    </div>
  );
};

export default Login;
