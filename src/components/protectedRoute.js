import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // You'll create this custom hook

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // Prevent flickering
  
  // If no user, redirect to Login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If user exists, show the Console Page
  return children;
};

export default ProtectedRoute;