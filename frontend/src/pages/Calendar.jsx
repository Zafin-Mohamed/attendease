import Navbar from '../components/Navbar'

function Calendar() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">Attendance Calendar</h1>
        <p className="text-gray-400 mb-6">Your attendance history at a glance.</p>

        <div className="bg-gray-900 rounded-xl p-6">
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-md ${
                  i % 3 === 0 ? 'bg-red-600' :
                  i % 5 === 0 ? 'bg-gray-700' :
                  'bg-green-600'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-600 rounded-sm inline-block"></span> Present</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-600 rounded-sm inline-block"></span> Absent</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-700 rounded-sm inline-block"></span> Cancelled</span>
          </div>
        </div>
        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default Calendar