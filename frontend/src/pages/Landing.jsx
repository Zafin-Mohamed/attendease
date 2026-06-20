import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">📋</div>
        <h1 className="text-5xl font-bold text-purple-400 mb-4">AttendEase</h1>
        <p className="text-gray-400 text-lg mb-3">
          Track your college attendance smartly.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          Never miss the 75% mark. Get warned before it's too late.
        </p>
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={() => navigate('/register')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold text-lg w-full">
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-4 rounded-xl font-semibold text-lg w-full">
            Login
          </button>
        </div>
        <p className="text-gray-600 text-xs mt-8">
          Free • Private • Works on any device
        </p>
      </div>
    </div>
  )
}

export default Landing