import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Dashboard({ subjects }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-purple-400">Good Morning!</h1>
          <button
            onClick={() => navigate('/timetable-setup')}
            className="text-sm bg-gray-800 hover:bg-gray-700 text-purple-400 px-4 py-2 rounded-lg font-semibold">
            Edit Timetable
          </button>
        </div>
        <p className="text-gray-400 mb-6">Here is your attendance summary for today.</p>

        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-1">Overall Attendance</h2>
          <p className="text-5xl font-bold text-green-400">85%</p>
          <p className="text-gray-400 text-sm mt-1">You are in the safe zone</p>
        </div>

        <h2 className="text-lg font-semibold text-white mb-3">Your Subjects</h2>

        {subjects.length === 0 ? (
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <p className="text-gray-400 mb-3">You haven't added any subjects yet.</p>
            <button
              onClick={() => navigate('/timetable-setup')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold">
              Setup Timetable
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-gray-900 rounded-xl p-4 border-l-4 border-gray-600">
                <p className="text-white font-semibold capitalize">{subject.name}</p>
                <p className="text-gray-400 text-sm">No attendance marked yet</p>
              </div>
            ))}
          </div>
        )}

        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default Dashboard