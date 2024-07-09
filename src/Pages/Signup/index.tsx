import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // await axios.post('https://example.com/api/signup', { email, password });
      navigate('/profile');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div className="bg-main bg-cover min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-md shadow-lg p-8">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Signup</h2>
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
            Signup
          </button>
          <div className="text-center mt-4">
            <span className="text-white">Already have an account? <a href="/login" className="text-white hover:underline">Login here</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
