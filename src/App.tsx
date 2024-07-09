import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ProtectedRoute from './Utility/protectedRouteWrapper';
import Profile from './Pages/Profile';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>    
    <Router>
      <Routes>
        {/* ERROR */}
        <Route path="/*" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />

        {/* AUTH */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/home" /> : <Signup />} />
        
        {/* PROFILE */}
        <Route path="/:username" element={<Profile/>} />
        

        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
