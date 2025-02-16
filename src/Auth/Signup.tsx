import React, { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

interface SignupProps {
  onClose?: () => void; // Add this line to define the onClose prop
}

const Signup: React.FC<SignupProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/signin'); // Redirect to sign in after successful signup
      if (onClose) onClose(); // Call onClose if it exists
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard'); // Redirect to dashboard after successful signup
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('src/assets/aq.svg')` }} // Replace with your image path
    >
       <Link
        to="/"
        className="absolute top-4 left-4 bg-blue-300 bg-opacity-90 backdrop-blur-sm text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-all"
      >
        Home
      </Link>
      <div className="max-w-md w-full bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-2xl transform transition-all hover:shadow-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        <p className="text-center text-gray-600 mb-8">Join us to get started</p>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <button
          onClick={handleGoogleSignup}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-4"
          disabled={loading}
        >
          {loading ? 'Signing up with Google...' : 'Sign Up with Google'}
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;