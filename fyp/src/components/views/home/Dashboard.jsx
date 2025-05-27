// components/views/home/Dashboard.jsx
import React from 'react'
import CardLayout from '../../layouts/CardLayout '
import SectionContainer from '../../layouts/SectionContainer'
import SupervisorCard from '../home/SupervisorCard'

const Dashboard = () => {
  const recentRequests = [
    {
      title: "AI-Based Chatbot for Education",
      team: "Ali, Aisha, Omar",
      status: "Pending"
    },
    {
      title: "Blockchain Voting System",
      team: "Fatima, Hassan",
      status: "Pending"
    },
    {
      title: "IoT Smart Campus",
      team: "Khalid, Leila, Mustafa",
      status: "Pending"
    }
  ]

  const availableSupervisors = [
    {
      name: "Dr. Sarah Johnson",
      title: "Professor",
      department: "Computer Science",
      specialization: "Data Science, Big Data",
      availability: 3,
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Prof. Michael Chen",
      title: "Associate Professor",
      department: "Software Engineering",
      specialization: "Cloud Computing, Distributed Systems",
      availability: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <SectionContainer>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Supervisor Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, Dr. Khan</span>
            <img 
              className="h-10 w-10 rounded-full" 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Profile" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <CardLayout>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Active Projects</h3>
            <p className="text-3xl font-bold text-blue-600">8</p>
          </CardLayout>
          <CardLayout>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Pending Requests</h3>
            <p className="text-3xl font-bold text-yellow-500">3</p>
          </CardLayout>
          <CardLayout>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Available Slots</h3>
            <p className="text-3xl font-bold text-green-600">5</p>
          </CardLayout>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <CardLayout title="Recent Project Requests">
            <div className="divide-y">
              {recentRequests.map((request, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">{request.title}</h3>
                      <p className="text-sm text-gray-600">Submitted by: {request.team}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm">
                        Accept
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm">
                        Reject
                      </button>
                      <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardLayout>

          <CardLayout title="Available Supervisors">
            <div className="space-y-4">
              {availableSupervisors.map((supervisor, index) => (
                <SupervisorCard key={index} {...supervisor} />
              ))}
            </div>
          </CardLayout>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Dashboard