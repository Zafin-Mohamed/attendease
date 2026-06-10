import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Welcome Back</h2>
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="password" placeholder="Password" className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold mt-2">
            Login
          </button>
          <p className="text-gray-400 text-center text-sm">
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              className="text-purple-400 cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login