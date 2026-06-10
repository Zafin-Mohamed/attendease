function SubjectDetail() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">DBMS</h1>
        <p className="text-gray-400 mb-6">Full attendance history for this subject.</p>

        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <p className="text-white font-semibold mb-1">Current Attendance</p>
          <p className="text-5xl font-bold text-green-400">88%</p>
          <p className="text-gray-400 text-sm mt-1">22 present out of 25 classes</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Attendance History</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <p className="text-gray-400">June 8, 2026</p>
              <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">Present</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <p className="text-gray-400">June 7, 2026</p>
              <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full">Absent</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <p className="text-gray-400">June 6, 2026</p>
              <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full">Cancelled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectDetail