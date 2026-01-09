// A helper to call your FastAPI backend
export const fetchProtectedData = async (user) => {
  if (!user) return;
  
  const token = await user.getIdToken(); // Get fresh Firebase Token
  
  const response = await fetch('/api/protected', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return response.json();
};