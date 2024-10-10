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
    <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      {error && <div className="bg-red-100 text-red-600 p-2 rounded mb-4">{error}</div>}

      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-4 text-center">OR</div>

      <button
        onClick={handleGoogleSignup}
        className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors mt-2"
        disabled={loading}
      >
        {loading ? 'Signing up with Google...' : 'Sign Up with Google'}
      </button>

      <div className="mt-4 text-center">
        Already have an account?{' '}
        <Link to="/signin" className="text-blue-600 hover:underline">
          Sign in here
        </Link>
      </div>
    </div>
  );
};

export default Signup;
