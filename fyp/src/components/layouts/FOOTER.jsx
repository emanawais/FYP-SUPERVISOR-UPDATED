const FOOTER = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 pt-12 pb-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* University Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://via.placeholder.com/40x40" 
                alt="University Logo" 
                className="h-10 w-10"
              />
              <h3 className="text-lg font-semibold">FYP Supervision</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Faculty of Computer Science & Engineering<br />
              University of Technology<br />
              Academic Year 2023/2024
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">ResearchGate</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.387 0 0 5.387 0 12s5.387 12 12 12 12-5.387 12-12S18.613 0 12 0zm0 22.75C6.062 22.75 1.25 17.938 1.25 12S6.062 1.25 12 1.25 22.75 6.062 22.75 12 17.938 22.75 12 22.75zM8.47 8.47h3.06v1.53H8.47zm0 2.04h3.06v6.12H8.47zm5.51-2.04h3.06v1.53h-3.06zm0 2.04h3.06v6.12h-3.06z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Google Scholar</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.387 0 0 5.387 0 12s5.387 12 12 12 12-5.387 12-12S18.613 0 12 0zm0 22.75C6.062 22.75 1.25 17.938 1.25 12S6.062 1.25 12 1.25 22.75 6.062 22.75 12 17.938 22.75 12 22.75zM8.47 8.47h3.06v1.53H8.47zm0 2.04h3.06v6.12H8.47zm5.51-2.04h3.06v1.53h-3.06zm0 2.04h3.06v6.12h-3.06z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">ORCID</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm-1.125-6.75h2.25v-9h-2.25v9z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold tracking-wider uppercase text-gray-300">Supervision</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Project Guidelines
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Meeting Scheduler
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Submission Portal
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Grading Rubrics
              </a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold tracking-wider uppercase text-gray-300">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Research Databases
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code Repositories
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Templates & Forms
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Ethics Documentation
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold tracking-wider uppercase text-gray-300">Office Hours</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Wed: 2:00 PM - 5:00 PM
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Building C, Room 412
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                supervisor@university.edu
              </p>
            </div>
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Faculty of Computer Science & Engineering. All academic materials are property of the university.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition">Academic Integrity</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FOOTER;