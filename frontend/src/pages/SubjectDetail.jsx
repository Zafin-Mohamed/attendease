import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getAttendancePercent, getZone, getSafeToMiss, getClassesToRecover } from '../utils/calculations'

const zoneTextColors = {
  green: 'text-green-400',
  yellow: 'text-yellow-400',
  red: 'text-red-400',
  none: 'text-gray-400',
}

const zoneLabels = {
  green: 'Safe zone',
  yellow: 'Warning zone',
  red: 'Danger zone',
  none: 'No data yet',
}

function SubjectDetail({ subjects, attendanceRecords }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const subject = subjects.find((s) => String(s.id) === String(id))

  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Subject not found.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg">
            Go Back
          </button>
        </div>
      </div>
    )
  }

  const percent = getAttendancePercent(subject.id, attendanceRecords)
  const zone = getZone(percent)
  const safeToMiss = getSafeToMiss(subject.id, attendanceRecords)
  const toRecover = getClassesToRecover(subject.id, attendanceRecords)

  const subjectRecords = attendanceRecords
    .filter((r) => r.subjectId === subject.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const statusColors = {
    present: 'bg-green-600',
    absent: 'bg-red-600',
    cancelled: 'bg-gray-600',
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">

        <button
          onClick={() => navigate('/dashboard')}
          className="text-purple-400 text-sm mb-4 flex items-center gap-1 hover:underline">
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold text-white capitalize mb-6">{subject.name}</h1>

        {/* Stats */}
        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm mb-1">Current Attendance</p>
              <p className={`text-5xl font-bold ${zoneTextColors[zone]}`}>
                {percent !== null ? `${percent}%` : '--'}
              </p>
              <p className={`text-sm mt-1 ${zoneTextColors[zone]}`}>{zoneLabels[zone]}</p>
            </div>
            <div className="text-right">
              {zone === 'red' && toRecover > 0 && (
                <div className="bg-red-900 rounded-lg p-3">
                  <p className="text-red-400 text-xs">Attend</p>
                  <p className="text-red-400 font-bold text-2xl">{toRecover}</p>
                  <p className="text-red-400 text-xs">more to recover</p>
                </div>
              )}
              {zone !== 'red' && zone !== 'none' && safeToMiss > 0 && (
                <div className="bg-green-900 rounded-lg p-3">
                  <p className="text-green-400 text-xs">Can miss</p>
                  <p className="text-green-400 font-bold text-2xl">{safeToMiss}</p>
                  <p className="text-green-400 text-xs">more classes</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-gray-400 text-sm mb-2">Scheduled on</p>
          <div className="flex flex-wrap gap-2">
            {subject.days.length === 0 ? (
              <p className="text-gray-500 text-sm">No days assigned</p>
            ) : (
              subject.days.map((day) => (
                <span key={day} className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {day}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Attendance History */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Attendance History</h2>
          {subjectRecords.length === 0 ? (
            <p className="text-gray-500 text-sm">No attendance marked yet.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {subjectRecords.map((record, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <p className="text-gray-400">{record.date}</p>
                  <span className={`${statusColors[record.status]} text-white text-xs px-3 py-1 rounded-full capitalize`}>
                    {record.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default SubjectDetail