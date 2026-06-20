import Navbar from '../components/Navbar'

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getTodayDateString() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function MarkAttendance({ subjects, attendanceRecords, setAttendanceRecords }) {
  const today = new Date()
  const todayName = DAY_NAMES[today.getDay()]
  const todayDate = getTodayDateString()

  const todaysSubjects = subjects.filter((subject) => subject.days.includes(todayName))

  function getStatus(subjectId) {
    const record = attendanceRecords.find(
      (r) => r.subjectId === subjectId && r.date === todayDate
    )
    return record ? record.status : null
  }

  function markAttendance(subjectId, status) {
    const existingIndex = attendanceRecords.findIndex(
      (r) => r.subjectId === subjectId && r.date === todayDate
    )

    if (existingIndex === -1) {
      setAttendanceRecords([
        ...attendanceRecords,
        { subjectId, date: todayDate, status },
      ])
    } else {
      const updated = attendanceRecords.map((r, index) =>
        index === existingIndex ? { ...r, status } : r
      )
      setAttendanceRecords(updated)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">Mark Attendance</h1>
        <p className="text-gray-400 mb-6">Today's classes — {todayName}, {todayDate}</p>

        {todaysSubjects.length === 0 ? (
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <p className="text-gray-400">No classes scheduled for today.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {todaysSubjects.map((subject) => {
              const status = getStatus(subject.id)

              return (
                <div key={subject.id} className="bg-gray-900 rounded-xl p-4">
                  <p className="text-white font-semibold text-lg mb-3 capitalize">{subject.name}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => markAttendance(subject.id, 'present')}
                      className={`px-4 py-2 rounded-lg font-semibold flex-1 ${
                        status === 'present'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-green-700'
                      }`}
                    >
                      Present
                    </button>
                    <button
                      onClick={() => markAttendance(subject.id, 'absent')}
                      className={`px-4 py-2 rounded-lg font-semibold flex-1 ${
                        status === 'absent'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-red-700'
                      }`}
                    >
                      Absent
                    </button>
                    <button
                      onClick={() => markAttendance(subject.id, 'cancelled')}
                      className={`px-4 py-2 rounded-lg font-semibold flex-1 ${
                        status === 'cancelled'
                          ? 'bg-gray-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      Cancelled
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
<div className="bg-gray-900 rounded-xl p-4 mt-4 text-center">
  <p className="text-gray-400 text-sm">Tap Present, Absent, or Cancelled for each class.</p>
  <p className="text-gray-600 text-xs mt-1">You can change your selection anytime today.</p>
</div>
        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default MarkAttendance