import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Define the type for the props
interface ProtectedRouteProps {
  children: JSX.Element; // You can add more properties if needed
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();

  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
