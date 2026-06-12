import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/dashboard', icon: '🏠' },
    { label: 'Mark', path: '/mark-attendance', icon: '✅' },
    { label: 'Calendar', path: '/calendar', icon: '📅' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-3 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center gap-1 text-xs font-semibold ${
            location.pathname === item.path
              ? 'text-purple-400'
              : 'text-gray-500 hover:text-white'
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export default Navbar