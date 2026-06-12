import Navbar from '../components/Navbar'

function MarkAttendance() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">Mark Attendance</h1>
        <p className="text-gray-400 mb-6">Today's classes — Monday, June 8 2026</p>

        <div className="flex flex-col gap-4">

          <div className="bg-gray-900 rounded-xl p-4">
            <p className="text-white font-semibold text-lg mb-3">DBMS</p>
            <div className="flex gap-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold flex-1">
                Present
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold flex-1">
                Absent
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold flex-1">
                Cancelled
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4">
            <p className="text-white font-semibold text-lg mb-3">Java</p>
            <div className="flex gap-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold flex-1">
                Present
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold flex-1">
                Absent
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold flex-1">
                Cancelled
              </button>
            </div>
          </div>

        </div>
        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default MarkAttendance