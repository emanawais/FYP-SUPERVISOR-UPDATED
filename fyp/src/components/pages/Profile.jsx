import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Sun, Moon } from 'lucide-react';

const App = () => {
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState('light');

  // Effect to apply the theme class to the body element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Placeholder user data
  const userProfile = {
    name: 'Alex Johnson',
    title: 'Full-Stack Developer',
    bio: 'Passionate full-stack developer with a keen eye for detail and a love for creating intuitive and efficient web applications. Always eager to learn new technologies and solve complex problems.',
    profilePicture: 'https://placehold.co/150x150/A78BFA/FFFFFF?text=AJ', // Placeholder image
    contact: {
      email: 'alex.johnson@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'www.alexjohnson.dev',
    },
    social: {
      twitter: 'alex_dev',
      linkedin: 'alexjohnsondev',
      github: 'alexjohnson',
    },
    skills: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'GraphQL', 'AWS'],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2022 - Present',
        description: 'Led development of scalable web applications, mentored junior developers, and optimized database performance.',
      },
      {
        title: 'Software Developer',
        company: 'Innovate Corp.',
        duration: 'Mar 2019 - Dec 2021',
        description: 'Developed and maintained client-side features using React and integrated with RESTful APIs.',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-850 shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.005] border border-gray-200 dark:border-gray-700">
        {/* Header and Theme Toggle */}
        <header className="relative p-6 sm:p-8 lg:p-10 bg-indigo-600 dark:bg-purple-900 text-white flex justify-between items-start rounded-t-3xl">
          <div className="flex items-center gap-4">
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover transform transition-all duration-300 hover:scale-105"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {userProfile.name}
              </h1>
              <p className="text-lg sm:text-xl font-light opacity-90 mt-1">
                {userProfile.title}
              </p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-indigo-700 dark:bg-purple-800 text-white hover:bg-indigo-800 dark:hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </header>

        <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio and Contact Info */}
          <section className="lg:col-span-2 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {userProfile.bio}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Contact Information</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-indigo-500 dark:text-indigo-300" />
                  <a href={`mailto:${userProfile.contact.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    {userProfile.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-indigo-500 dark:text-indigo-300" />
                  <a href={`tel:${userProfile.contact.phone}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    {userProfile.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={20} className="text-indigo-500 dark:text-indigo-300" />
                  <span>{userProfile.contact.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={20} className="text-indigo-500 dark:text-indigo-300" />
                  <a href={`http://${userProfile.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    {userProfile.contact.website}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Skills and Social Links */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {userProfile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-100 rounded-full text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Social Links</h2>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/${userProfile.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={`https://linkedin.com/in/${userProfile.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`https://github.com/${userProfile.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-900 dark:bg-gray-900 dark:hover:bg-black transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Experience Section */}
        <section className="p-6 sm:p-8 lg:p-10 pt-0">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Experience</h2>
            <div className="space-y-6">
              {userProfile.experience.map((job, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{job.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-300 font-medium">{job.company} <span className="text-gray-500 dark:text-gray-400 text-sm">({job.duration})</span></p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-6 sm:p-8 lg:p-10 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700">
          <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
