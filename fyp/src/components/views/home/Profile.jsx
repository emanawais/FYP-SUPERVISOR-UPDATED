import React from 'react'

function Profile() {
  return (
    <div>
      
 <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <div className="flex items-center space-x-4 mb-4">
      <img className="h-16 w-16 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Supervisor" />
      <div>
        <h2 className="text-xl font-bold text-gray-800">Dr. Ahmad Khan</h2>
        <p className="text-gray-600">Associate Professor</p>
      </div>
    </div>
    <div className="space-y-2">
      <p className="text-gray-700"><span className="font-semibold">Department:</span> Computer Science</p>
      <p className="text-gray-700"><span className="font-semibold">Specialization:</span> AI, Machine Learning</p>
      <p className="text-gray-700"><span className="font-semibold">Availability:</span> 5 slots remaining</p>
    </div>
    <div className="mt-4 flex space-x-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">View Profile</button>
      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">Request Supervision</button>
    </div>
  </div>
</div>



    </div>
  )
}

export default Profile
