// App.jsx
import { useState } from 'react'
import Dashboard from '../views/home/Dashboard'
import Meeting from '../views/home/Meeting'
import Profile from '../views/home/Profile'
import RequestForm from '../views/home/RequestForm'
import Tracker from '../views/home/Tracker'

function Dashboards() {
  const [activeComponent, setActiveComponent] = useState('dashboard')

  const renderComponent = () => {
    switch(activeComponent) {
      case 'dashboard':
        return <Dashboard />
      case 'meeting':
        return <Meeting />
      case 'profile':
        return <Profile />
      case 'request':
        return <RequestForm />
      case 'tracker':
        return <Tracker />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveComponent('dashboard')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeComponent === 'dashboard' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveComponent('tracker')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeComponent === 'tracker' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Progress Tracker
              </button>
              <button 
                onClick={() => setActiveComponent('meeting')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeComponent === 'meeting' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Meetings
              </button>
              <button 
                onClick={() => setActiveComponent('profile')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeComponent === 'profile' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Profile
              </button>
              <button 
                onClick={() => setActiveComponent('request')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeComponent === 'request' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Request Form
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="py-6">
        {renderComponent()}
      </main>
    </div>
  )
}

export default Dashboards