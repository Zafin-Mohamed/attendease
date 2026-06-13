import Navbar from '../components/Navbar'

function TimetableSetup() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">Setup Timetable</h1>
        <p className="text-gray-400 mb-6">Add your subjects and assign them to weekdays. You only do this once.</p>

        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Add a Subject</h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Subject name (eg: DBMS)"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 flex-1"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
              Add
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Assign Subjects to Days</h2>
          <div className="flex flex-col gap-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <div key={day} className="flex items-center justify-between border-b border-gray-800 pb-3">
                <p className="text-white font-semibold w-28">{day}</p>
                <p className="text-gray-500 text-sm">No subjects added yet</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default TimetableSetup