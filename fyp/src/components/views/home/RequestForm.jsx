import React from 'react'

function RequestForm() {
  return (
    <div>


<div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Request Supervision</h2>
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="project-title">Project Title</label>
      <input type="text" id="project-title" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="project-desc">Project Description</label>
      <textarea id="project-desc" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={""} />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="supervisor">Select Supervisor</label>
      <select id="supervisor" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Dr. Ahmad Khan</option>
        <option>Dr. Sarah Johnson</option>
        <option>Prof. Michael Chen</option>
        <option>Dr. Fatima Ahmed</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2" htmlFor="team-members">Team Members</label>
      <input type="text" id="team-members" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Comma separated names" />
    </div>
    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Submit Request</button>
  </form>
</div>

      
    </div>
  )
}

export default RequestForm
