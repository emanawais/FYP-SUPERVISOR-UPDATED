import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiUser, FiUsers, FiClock, FiSun, FiMoon, FiVideo, FiPlus, FiCheck, FiX } from 'react-icons/fi';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
// Replace the image imports at the top of Meetings.jsx with:
const avatar1 = 'https://randomuser.me/api/portraits/women/44.jpg';
const avatar2 = 'https://randomuser.me/api/portraits/men/32.jpg';
const avatar3 = 'https://randomuser.me/api/portraits/women/68.jpg';
const meetingIllustration = 'https://illustrations.popsy.co/amber/student.svg';

const Meetings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showModal, setShowModal] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    participants: [],
    date: '',
    time: '',
    duration: '30',
    description: ''
  });
  const [availableTeachers, setAvailableTeachers] = useState([
    { id: 1, name: 'Dr. Sarah Johnson', subject: 'Mathematics', avatar: avatar1, available: true },
    { id: 2, name: 'Prof. Michael Chen', subject: 'Physics', avatar: avatar2, available: false },
    { id: 3, name: 'Ms. Emily Wilson', subject: 'Literature', avatar: avatar3, available: true }
  ]);
  const [availableStudents, setAvailableStudents] = useState([
    { id: 4, name: 'Alex Rodriguez', grade: '11th', avatar: avatar1 },
    { id: 5, name: 'Jamie Smith', grade: '12th', avatar: avatar2 },
    { id: 6, name: 'Taylor Brown', grade: '10th', avatar: avatar3 }
  ]);
  const [upcomingMeetings, setUpcomingMeetings] = useState([
    {
      id: 1,
      title: 'Algebra Review Session',
      teacher: 'Dr. Sarah Johnson',
      student: 'Alex Rodriguez',
      date: '2023-06-15',
      time: '14:00',
      duration: '45',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Physics Lab Discussion',
      teacher: 'Prof. Michael Chen',
      student: 'Jamie Smith',
      date: '2023-06-16',
      time: '10:30',
      duration: '30',
      status: 'pending'
    }
  ]);
  const [pastMeetings, setPastMeetings] = useState([
    {
      id: 3,
      title: 'Literature Essay Feedback',
      teacher: 'Ms. Emily Wilson',
      student: 'Taylor Brown',
      date: '2023-06-10',
      time: '16:00',
      duration: '60',
      status: 'completed'
    }
  ]);

  useEffect(() => {
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark/light mode to the document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddParticipant = (type, id) => {
    const person = type === 'teacher' 
      ? availableTeachers.find(t => t.id === id)
      : availableStudents.find(s => s.id === id);
    
    if (person && !meetingDetails.participants.some(p => p.id === id)) {
      setMeetingDetails(prev => ({
        ...prev,
        participants: [...prev.participants, { ...person, type }]
      }));
    }
  };

  const handleRemoveParticipant = (id) => {
    setMeetingDetails(prev => ({
      ...prev,
      participants: prev.participants.filter(p => p.id !== id)
    }));
  };

  const handleSubmitMeeting = (e) => {
    e.preventDefault();
    const newMeeting = {
      id: upcomingMeetings.length + pastMeetings.length + 1,
      title: meetingDetails.title,
      teacher: meetingDetails.participants.find(p => p.type === 'teacher')?.name || 'TBD',
      student: meetingDetails.participants.find(p => p.type === 'student')?.name || 'TBD',
      date: meetingDetails.date,
      time: meetingDetails.time,
      duration: meetingDetails.duration,
      status: 'pending'
    };
    
    setUpcomingMeetings(prev => [...prev, newMeeting]);
    setShowModal(false);
    setMeetingDetails({
      title: '',
      participants: [],
      date: '',
      time: '',
      duration: '30',
      description: ''
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`py-6 px-8 shadow-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            EduConnect Meetings
          </motion.h1>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`mb-12 p-8 rounded-2xl shadow-lg overflow-hidden relative ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 z-10">
              <h2 className="text-4xl font-bold mb-4">Connect & Learn Seamlessly</h2>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Schedule meetings with teachers and students effortlessly. Enhance your learning experience with our interactive platform.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg flex items-center gap-2"
              >
                <FiPlus /> Schedule New Meeting
              </motion.button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <motion.img 
                src={meetingIllustration} 
                alt="Meeting illustration"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        </motion.section>

        {/* Tabs */}
        <div className="flex border-b mb-8">
          {['upcoming', 'past'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-colors duration-300 relative ${activeTab === tab 
                ? 'text-blue-500' 
                : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Meetings List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {(activeTab === 'upcoming' ? upcomingMeetings : pastMeetings).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeTab === 'upcoming' ? upcomingMeetings : pastMeetings).map((meeting) => (
                  <motion.div
                    key={meeting.id}
                    whileHover={{ y: -5 }}
                    className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  >
                    <div className={`p-6 ${meeting.status === 'completed' ? 'opacity-80' : ''}`}>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold truncate">{meeting.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          meeting.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          meeting.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        } ${darkMode ? '!bg-opacity-20' : ''}`}>
                          {meeting.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <FaChalkboardTeacher className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                        <span>{meeting.teacher}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <FaUserGraduate className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span>{meeting.student}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <FiCalendar className={`${darkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                        <span>{new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <FiClock className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                        <span>{meeting.time} ({meeting.duration} mins)</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                        }`}>
                          <FiVideo /> Join
                        </button>
                        
                        {activeTab === 'upcoming' && meeting.status === 'pending' && (
                          <div className="flex gap-2">
                            <button className="p-2 text-green-500 hover:bg-green-500 hover:bg-opacity-10 rounded-full">
                              <FiCheck />
                            </button>
                            <button className="p-2 text-red-500 hover:bg-red-500 hover:bg-opacity-10 rounded-full">
                              <FiX />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-12 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-medium mb-2">No {activeTab} meetings</h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {activeTab === 'upcoming' 
                    ? 'Schedule a new meeting to get started!' 
                    : 'Your past meetings will appear here.'}
                </p>
                {activeTab === 'upcoming' && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-medium"
                  >
                    Schedule Meeting
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Schedule Meeting Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`relative rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowModal(false)}
                className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <FiX size={24} />
              </button>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Schedule New Meeting</h2>
                
                <form onSubmit={handleSubmitMeeting}>
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">Meeting Title</label>
                    <input
                      type="text"
                      name="title"
                      value={meetingDetails.title}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="E.g., Algebra Review Session"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block mb-2 font-medium">Date</label>
                      <input
                        type="date"
                        name="date"
                        value={meetingDetails.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-medium">Time</label>
                      <input
                        type="time"
                        name="time"
                        value={meetingDetails.time}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">Duration (minutes)</label>
                    <select
                      name="duration"
                      value={meetingDetails.duration}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'
                      }`}
                    >
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                      <option value="60">60</option>
                      <option value="90">90</option>
                      <option value="120">120</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">Participants</label>
                    <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <FaChalkboardTeacher className="text-purple-500" /> Teachers
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {availableTeachers.map(teacher => (
                          <motion.div
                            key={teacher.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => teacher.available && handleAddParticipant('teacher', teacher.id)}
                            className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
                              teacher.available 
                                ? darkMode 
                                  ? 'hover:bg-gray-600' 
                                  : 'hover:bg-gray-200'
                                : 'opacity-50 cursor-not-allowed'
                            } ${
                              meetingDetails.participants.some(p => p.id === teacher.id) 
                                ? darkMode 
                                  ? 'bg-purple-900 bg-opacity-50' 
                                  : 'bg-purple-100'
                                : ''
                            }`}
                          >
                            <img 
                              src={teacher.avatar} 
                              alt={teacher.name} 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">{teacher.name}</p>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{teacher.subject}</p>
                            </div>
                            {!teacher.available && (
                              <span className="ml-auto text-xs px-2 py-1 bg-gray-500 bg-opacity-20 rounded">
                                Unavailable
                              </span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <FaUserGraduate className="text-blue-500" /> Students
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {availableStudents.map(student => (
                          <motion.div
                            key={student.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAddParticipant('student', student.id)}
                            className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
                              darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                            } ${
                              meetingDetails.participants.some(p => p.id === student.id) 
                                ? darkMode 
                                  ? 'bg-blue-900 bg-opacity-50' 
                                  : 'bg-blue-100'
                                : ''
                            }`}
                          >
                            <img 
                              src={student.avatar} 
                              alt={student.name} 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{student.grade}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {meetingDetails.participants.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Selected Participants</h4>
                        <div className="flex flex-wrap gap-2">
                          {meetingDetails.participants.map(participant => (
                            <motion.div
                              key={participant.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className={`flex items-center gap-2 px-3 py-2 rounded-full ${
                                participant.type === 'teacher' 
                                  ? darkMode 
                                    ? 'bg-purple-900 bg-opacity-50' 
                                    : 'bg-purple-100'
                                  : darkMode 
                                    ? 'bg-blue-900 bg-opacity-50' 
                                    : 'bg-blue-100'
                              }`}
                            >
                              <img 
                                src={participant.avatar} 
                                alt={participant.name} 
                                className="w-6 h-6 rounded-full object-cover"
                              />
                              <span className="text-sm">{participant.name}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveParticipant(participant.id)}
                                className="ml-1 p-1 rounded-full hover:bg-black hover:bg-opacity-10"
                              >
                                <FiX size={14} />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">Description (Optional)</label>
                    <textarea
                      name="description"
                      value={meetingDetails.description}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Meeting agenda, topics to cover, etc."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      disabled={meetingDetails.participants.length < 2}
                      className={`px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      Schedule Meeting
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Meetings;