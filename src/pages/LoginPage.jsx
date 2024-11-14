import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LoginPage({ setUser }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (
      (savedUser && (userId === savedUser.email || userId === savedUser.mobile)) &&
      await bcrypt.compare(password, savedUser.password)
    ) {
      setUser(savedUser);
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid User ID or Password');
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">User ID (Email or Mobile)</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email or Mobile"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account? <Link to="/signup" className="text-blue-500">Signup</Link>
        </p>
      </div>
    </div>
    <Footer />
    
    </>
  );
}

export default LoginPage;
