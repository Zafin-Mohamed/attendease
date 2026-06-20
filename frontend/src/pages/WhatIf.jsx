import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getAttendancePercent, getZone } from '../utils/calculations'

const zoneTextColors = {
  green: 'text-green-400',
  yellow: 'text-yellow-400',
  red: 'text-red-400',
  none: 'text-gray-400',
}

const zoneLabels = {
  green: 'Safe zone — you are fine',
  yellow: 'Warning zone — be careful',
  red: 'Danger zone — attend more classes',
  none: 'No data yet',
}

function WhatIf({ subjects, attendanceRecords }) {
  const navigate = useNavigate()
  const [selectedSubjectId, setSelectedSubjectId] = useState('')
  const [missCount, setMissCount] = useState('')
  const [result, setResult] = useState(null)

  function calculateWhatIf() {
    if (!selectedSubjectId || missCount === '') return

    const subjectId = Number(selectedSubjectId)
    const extraAbsences = Number(missCount)

    const records = attendanceRecords.filter(
      (r) => r.subjectId === subjectId && r.status !== 'cancelled'
    )

    const total = records.length
    const present = records.filter((r) => r.status === 'present').length

    if (total === 0) {
      setResult({ error: 'No attendance data yet for this subject.' })
      return
    }

    const newTotal = total + extraAbsences
    const newPercent = Math.round((present / newTotal) * 100)
    const newZone = getZone(newPercent)
    const currentPercent = getAttendancePercent(subjectId, attendanceRecords)

    setResult({
      currentPercent,
      newPercent,
      newZone,
      extraAbsences,
    })
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">

        <button
          onClick={() => navigate('/dashboard')}
          className="text-purple-400 text-sm mb-4 flex items-center gap-1 hover:underline">
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold text-purple-400 mb-2">What If Simulator</h1>
        <p className="text-gray-400 mb-6">See what happens to your attendance if you miss more classes.</p>

        {subjects.length === 0 ? (
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <p className="text-gray-400 mb-3">No subjects added yet.</p>
            <button
              onClick={() => navigate('/timetable-setup')}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold">
              Setup Timetable
            </button>
          </div>
        ) : (
          <>
            <div className="bg-gray-900 rounded-xl p-6 mb-4">
              <h2 className="text-lg font-semibold text-white mb-4">Select Subject</h2>
              <select
                value={selectedSubjectId}
                onChange={(e) => {
                  setSelectedSubjectId(e.target.value)
                  setResult(null)
                }}
                className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none w-full focus:ring-2 focus:ring-purple-500">
                <option value="">-- Choose a subject --</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 mb-4">
              <h2 className="text-lg font-semibold text-white mb-4">How many classes do you want to miss?</h2>
              <input
                type="number"
                min="1"
                max="50"
                placeholder="Enter number"
                value={missCount}
                onChange={(e) => {
                  setMissCount(e.target.value)
                  setResult(null)
                }}
                className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none w-full focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={calculateWhatIf}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold w-full mt-4">
                Calculate
              </button>
            </div>

            {result && (
              <div className="bg-gray-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Result</h2>
                {result.error ? (
                  <p className="text-red-400">{result.error}</p>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-gray-400 text-sm">Current</p>
                        <p className="text-white font-bold text-2xl">{result.currentPercent}%</p>
                      </div>
                      <div className="text-gray-500 text-2xl">→</div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">After missing {result.extraAbsences} class{result.extraAbsences !== 1 ? 'es' : ''}</p>
                        <p className={`font-bold text-2xl ${zoneTextColors[result.newZone]}`}>{result.newPercent}%</p>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold ${zoneTextColors[result.newZone]}`}>
                      {zoneLabels[result.newZone]}
                    </p>
                  </>
                )}
              </div>
            )}
          </>
        )}

        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default WhatIf