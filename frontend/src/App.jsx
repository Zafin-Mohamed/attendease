import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MarkAttendance from './pages/MarkAttendance'
import TimetableSetup from './pages/TimetableSetup'
import SubjectDetail from './pages/SubjectDetail'
import WhatIf from './pages/WhatIf'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'

function App() {
  const [subjects, setSubjects] = useState([])
  const [attendanceRecords, setAttendanceRecords] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard subjects={subjects} attendanceRecords={attendanceRecords} />} />
        <Route
          path="/mark-attendance"
          element={
            <MarkAttendance
              subjects={subjects}
              attendanceRecords={attendanceRecords}
              setAttendanceRecords={setAttendanceRecords}
            />
          }
        />
        <Route path="/timetable-setup" element={<TimetableSetup subjects={subjects} setSubjects={setSubjects} />} />
        <Route path="/subject/:id" element={<SubjectDetail subjects={subjects} attendanceRecords={attendanceRecords} />} />
        <Route path="/what-if" element={<WhatIf />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App