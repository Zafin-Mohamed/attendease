import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-purple-400 mb-4">AttendEase</h1>
      <p className="text-gray-400 text-lg mb-8 text-center">
        Track your college attendance smartly. Never miss the 75% mark.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/register')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
        <button
          onClick={() => navigate('/login')}
          className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold">
          Login
        </button>
      </div>
    </div>
  )
}

export default Landing