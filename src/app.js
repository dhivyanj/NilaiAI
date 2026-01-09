import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ConsolePage from './pages/Console/ConsolePage';

function App() {
  return (
    <BrowserRouter>
      {/* Wrap everything in AuthProvider so we know who is logged in */}
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Route (The Console) */}
          <Route 
            path="/console" 
            element={
              <ProtectedRoute>
                <ConsolePage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;