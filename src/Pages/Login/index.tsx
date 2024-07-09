import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // const response = await axios.post('https://example.com/api/login', { email, password });
      localStorage.setItem('token', "response.data.token");
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="bg-main bg-cover min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-md shadow-lg p-8">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
            <input
              id="email"
              type="email"
              className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 transition duration-300 rounded-md py-2 px-3 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">Password</label>
            <input
              id="password"
              type="password"
              className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 transition duration-300 rounded-md py-2 px-3 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white bg-opacity-30 hover:bg-opacity-40 transition duration-300 rounded-md py-2 px-4 font-semibold shadow-md"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <span className="text-white">or</span>
          </div>
          <div className="text-center mt-4">
            <a href="/signup" className="text-sm text-white hover:underline">Don't have a account? Signup</a>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-white hover:underline">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
