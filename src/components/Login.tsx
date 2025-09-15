
import { useEffect } from 'react';
import useGoogle from '../hooks/useGoogle'
import useGithub from '@/hooks/useGithub';
import Background from './ui/Background';
const Login = () => {
  const { GoogleSignIn } = useGoogle();
  const { signInWithGithub } = useGithub();

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("email") !== null) {
        window.location.href = "/news";
      }
    }, 1000);
  }, [])


  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 z-50">
      <Background/>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0  bg-gray-800 opacity-10 z-0  bg-gradient-to-br from-black to-neutral-700 "></div>

      {/* Login form container */}
      <div className="relative z-10 w-full max-w-md ">
        <div className=" backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700 ">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to continue your journey</p>
          </div>

          {/* Google Sign-in Button */}
          <button
            onClick={() => {
              GoogleSignIn()
            }}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 focus:outline-none "
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                fill="currentColor"
              />
            </svg>
            Sign in with Google
          </button>
          {/* Divider */}
          <div className="flex items-center my-4">
          </div>
          <button
            onClick={signInWithGithub}
            className="w-full flex items-center text-white justify-center gap-3 bg-black py-3 px-4 rounded-lg font-medium  focus:outline-none "
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Sign in with GitHub
          </button>

          {/* Sign up link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">© 2025 WorldNews. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;