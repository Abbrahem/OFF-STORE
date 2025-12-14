import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL } from '../config';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        Swal.fire({ icon: 'error', title: 'Invalid credentials', confirmButtonColor: '#171717' });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Login failed', confirmButtonColor: '#171717' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm animate-fadeIn">
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-display text-sm font-bold">OFF</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-neutral-900">Admin Login</h1>
          <p className="text-neutral-500 text-sm mt-1">Enter your credentials</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-style"
              placeholder="admin@offstore.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-style"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary mt-6 disabled:bg-neutral-300"
          >
            {loading ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
