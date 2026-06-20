import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getAttendancePercent, getZone, getSafeToMiss, getClassesToRecover } from '../utils/calculations'

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function Dashboard({ subjects, attendanceRecords }) {
  const navigate = useNavigate()

  const today = new Date()
  const todayName = DAY_NAMES[today.getDay()]

  const hour = today.getHours()
  let greeting = 'Good Morning!'
  if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon!'
  } else if (hour >= 17) {
    greeting = 'Good Evening!'
  }

  const todaysSubjects = subjects.filter((subject) => subject.days.includes(todayName))

  const zoneColors = {
    green: 'border-green-500',
    yellow: 'border-yellow-500',
    red: 'border-red-500',
    none: 'border-gray-600',
  }

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

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-purple-400">{greeting}</h1>
          <button
            onClick={() => navigate('/timetable-setup')}
            className="text-sm bg-gray-800 hover:bg-gray-700 text-purple-400 px-4 py-2 rounded-lg font-semibold">
            Edit Timetable
          </button>
        </div>
        <p className="text-gray-400 mb-1">Today is {todayName}</p>
<p className="text-gray-600 text-xs mb-6">
  {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
</p>

        {/* Today's Classes */}
        <h2 className="text-lg font-semibold text-white mb-3">Today's Classes</h2>
        {subjects.length === 0 ? (
          <div className="bg-gray-900 rounded-xl p-6 text-center mb-6">
            <p className="text-gray-400 mb-3">You haven't added any subjects yet.</p>
            <button
              onClick={() => navigate('/timetable-setup')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold">
              Setup Timetable
            </button>
          </div>
        ) : todaysSubjects.length === 0 ? (
          <div className="bg-gray-900 rounded-xl p-6 text-center mb-6">
            <p className="text-gray-400">No classes today. Enjoy your day off!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mb-6">
            {todaysSubjects.map((subject) => (
              <div key={subject.id} className="bg-gray-900 rounded-xl p-4 border-l-4 border-purple-500">
                <p className="text-white font-semibold capitalize">{subject.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* All Subjects with Attendance */}
        {subjects.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-white mb-3">All Subjects</h2>
            <div className="flex flex-col gap-4">
              {subjects.map((subject) => {
                const percent = getAttendancePercent(subject.id, attendanceRecords)
                const zone = getZone(percent)
                const safeToMiss = getSafeToMiss(subject.id, attendanceRecords)
                const toRecover = getClassesToRecover(subject.id, attendanceRecords)

                return (
                  <div
  key={subject.id}
  onClick={() => navigate(`/subject/${subject.id}`)}
  className={`bg-gray-900 rounded-xl p-4 border-l-4 ${zoneColors[zone]} cursor-pointer hover:bg-gray-800`}
>
                    <div className="flex justify-between items-start">
                      <p className="text-white font-semibold capitalize">{subject.name}</p>
                      <span className={`font-bold text-xl ${zoneTextColors[zone]}`}>
                        {percent !== null ? `${percent}%` : '--'}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${zoneTextColors[zone]}`}>{zoneLabels[zone]}</p>
                    {percent !== null && zone !== 'red' && safeToMiss > 0 && (
                      <p className="text-gray-400 text-xs mt-1">Can miss {safeToMiss} more class{safeToMiss !== 1 ? 'es' : ''}</p>
                    )}
                    {percent !== null && zone === 'red' && (
                      <p className="text-red-400 text-xs mt-1">Attend {toRecover} more class{toRecover !== 1 ? 'es' : ''} to recover</p>
                    )}
                  </div>
                )
              })}
            </div>
          </>
        )}
<button
  onClick={() => navigate('/what-if')}
  className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-purple-400 py-3 rounded-xl font-semibold border border-gray-800">
  What If Simulator →
</button>
        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default Dashboard