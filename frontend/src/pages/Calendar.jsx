import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Calendar({ attendanceRecords }) {
  const navigate = useNavigate()

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()

  const monthName = today.toLocaleString('default', { month: 'long' })

  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const dayNumber = i + 1
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`

    const recordsForDay = attendanceRecords.filter((r) => r.date === dateStr)

    let color = 'bg-gray-800'

    if (recordsForDay.length > 0) {
      const hasPresent = recordsForDay.some((r) => r.status === 'present')
      const hasAbsent = recordsForDay.some((r) => r.status === 'absent')
      const allCancelled = recordsForDay.every((r) => r.status === 'cancelled')

      if (allCancelled) color = 'bg-gray-600'
      else if (hasPresent && !hasAbsent) color = 'bg-green-600'
      else if (hasAbsent && !hasPresent) color = 'bg-red-600'
      else color = 'bg-yellow-500'
    }

    return { dayNumber, dateStr, color }
  })

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const emptyBoxes = Array.from({ length: firstDayOfMonth })

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">

        <button
          onClick={() => navigate('/dashboard')}
          className="text-purple-400 text-sm mb-4 flex items-center gap-1 hover:underline">
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold text-purple-400 mb-2">Attendance Calendar</h1>
        <p className="text-gray-400 mb-6">{monthName} {year}</p>

        <div className="bg-gray-900 rounded-xl p-6">

          {/* Day labels */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <p key={d} className="text-gray-500 text-xs text-center">{d}</p>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {emptyBoxes.map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {days.map((day) => (
              <div
                key={day.dateStr}
                className={`${day.color} rounded-md aspect-square flex items-center justify-center`}
              >
                <span className="text-white text-xs font-semibold">{day.dayNumber}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-6 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-600 rounded-sm inline-block"></span> All Present
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-red-600 rounded-sm inline-block"></span> All Absent
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-yellow-500 rounded-sm inline-block"></span> Mixed
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-gray-600 rounded-sm inline-block"></span> Cancelled
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-gray-800 rounded-sm inline-block"></span> No class
            </span>
          </div>
        </div>

        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default Calendar