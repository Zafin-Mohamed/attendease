import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { exportAttendancePDF } from '../utils/exportPDF'

function Settings({ subjects, attendanceRecords }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-6">Settings</h1>

        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <h2 className="text-lg font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-3">
            <input type="text" placeholder="Full Name" className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="text" placeholder="Registration Number" className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="text" placeholder="College Name" className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <h2 className="text-lg font-semibold text-white mb-2">Export Attendance</h2>
          <p className="text-gray-400 text-sm mb-4">Download your full attendance report as a PDF.</p>
          <button
            onClick={() => exportAttendancePDF(subjects, attendanceRecords)}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold w-full">
            Download PDF Report
          </button>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <button
            onClick={() => navigate('/')}
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold w-full">
            Logout
          </button>
        </div>

        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default Settings