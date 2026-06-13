import Navbar from '../components/Navbar'

function WhatIf() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">What If Simulator</h1>
        <p className="text-gray-400 mb-6">See what happens to your attendance if you miss more classes.</p>

        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Select Subject</h2>
          <select className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none w-full focus:ring-2 focus:ring-purple-500">
            <option>DBMS</option>
            <option>Java</option>
            <option>Unix</option>
          </select>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">How many classes do you want to miss?</h2>
          <input
            type="number"
            placeholder="Enter number of classes"
            className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none w-full focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold w-full mt-4">
            Calculate
          </button>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Result</h2>
          <p className="text-4xl font-bold text-yellow-400">74.2%</p>
          <p className="text-gray-400 mt-2">Warning — you will drop below 75% if you miss 3 more classes.</p>
        </div>

        <div className="pb-20"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default WhatIf