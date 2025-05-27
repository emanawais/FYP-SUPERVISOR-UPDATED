// components/ProjectProgressCard.jsx
import React from 'react'

const ProjectProgressCard = ({ 
  title, 
  team, 
  supervisor, 
  status, 
  progress, 
  milestones 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === 'Completed' ? 'bg-green-100 text-green-800' :
            status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {status}
          </span>
        </div>
        <div className="mb-6">
          <p className="text-gray-600 text-sm">Team: {team} • Supervisor: {supervisor}</p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm font-medium text-gray-700">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{width: `${progress}%`}} 
            />
          </div>
        </div>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className={`h-3 w-3 rounded-full ${
                  milestone.status === 'Completed' ? 'bg-green-500' :
                  milestone.status === 'In Progress' ? 'bg-blue-500' :
                  'bg-gray-300'
                }`} />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">{milestone.title}</p>
                <p className="text-sm text-gray-500">{milestone.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectProgressCard