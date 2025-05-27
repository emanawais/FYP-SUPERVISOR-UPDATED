// components/SupervisorCard.jsx
import React from 'react'

const SupervisorCard = ({ name, title, department, specialization, availability, imageUrl }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img className="h-16 w-16 rounded-full object-cover" src={imageUrl} alt={name} />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-700"><span className="font-semibold">Department:</span> {department}</p>
          <p className="text-gray-700"><span className="font-semibold">Specialization:</span> {specialization}</p>
          <p className="text-gray-700"><span className="font-semibold">Availability:</span> {availability} slots remaining</p>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            View Profile
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
            Request Supervision
          </button>
        </div>
      </div>
    </div>
  )
}

export default SupervisorCard