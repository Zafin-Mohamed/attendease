import { useState } from 'react'
import Navbar from '../components/Navbar'

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function TimetableSetup({ subjects, setSubjects }) {
  const [subjectName, setSubjectName] = useState('')

  function handleAddSubject() {
    if (subjectName.trim() === '') return

    const newSubject = {
      id: Date.now(),
      name: subjectName,
      days: [],
    }

    setSubjects([...subjects, newSubject])
    setSubjectName('')
  }

  function toggleDay(subjectId, day) {
    const updatedSubjects = subjects.map((subject) => {
      if (subject.id !== subjectId) {
        return subject
      }

      const hasDay = subject.days.includes(day)
      const newDays = hasDay
        ? subject.days.filter((d) => d !== day)
        : [...subject.days, day]

      return { ...subject, days: newDays }
    })

    setSubjects(updatedSubjects)
  }

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
              placeholder="Subject name"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 flex-1"
            />
            <button
              onClick={handleAddSubject}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
              Add
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Your Subjects</h2>
          {subjects.length === 0 ? (
            <p className="text-gray-500 text-sm">No subjects added yet</p>
          ) : (
            <div className="flex flex-col gap-4">
              {subjects.map((subject) => (
                <div key={subject.id} className="bg-gray-800 rounded-lg p-4">
                  <p className="text-white font-semibold capitalize mb-3">{subject.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {WEEKDAYS.map((day) => {
                      const isSelected = subject.days.includes(day)
                      return (
                        <button
                          key={day}
                          onClick={() => toggleDay(subject.id, day)}
                          className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
                            isSelected
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                          }`}
                        >
                          {day.slice(0, 3)}
                        </button>
                      )
                    })}
                  </div>
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

export default TimetableSetup