import React from 'react'

function Meeting() {
  return (
    <div>

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Schedule Meeting</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
        <input type="date" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
        <input type="time" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Type</label>
        <select className="w-full px-3 py-2 border rounded-md">
          <option>Online (Zoom)</option>
          <option>Physical Meeting</option>
          <option>Phone Call</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Agenda</label>
        <textarea rows={3} className="w-full px-3 py-2 border rounded-md" placeholder="Briefly describe meeting purpose" defaultValue={""} />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Schedule Meeting</button>
    </div>
    <div className="mt-6">
      <h3 className="font-medium text-gray-800 mb-2">Upcoming Meetings</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <div>
            <p className="text-sm font-medium">Project Discussion</p>
            <p className="text-xs text-gray-500">May 15, 2023 • 2:00 PM (Zoom)</p>
          </div>
          <button className="text-red-500 text-xs">Cancel</button>
        </div>
        {/* More meetings would go here */}
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Meeting
