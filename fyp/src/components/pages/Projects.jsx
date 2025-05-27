import React, { useState, useEffect } from 'react';
import { FiPlus, FiTrash2, FiEdit, FiSun, FiMoon } from 'react-icons/fi';

const Projects = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    if (savedDarkMode) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('darkMode', darkMode);

    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [projects, darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName.trim()) return;

    if (editingId) {
      // ✅ Corrected closing parenthesis here
      setProjects(projects.map(project =>
        project.id === editingId
          ? { ...project, name: projectName, description: projectDescription }
          : project
      ));
      setEditingId(null);
    } else {
      const newProject = {
        id: Date.now(),
        name: projectName,
        description: projectDescription,
        createdAt: new Date().toISOString()
      };
      setProjects([...projects, newProject]);
    }

    setProjectName('');
    setProjectDescription('');
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const editProject = (project) => {
    setProjectName(project.name);
    setProjectDescription(project.description);
    setEditingId(project.id);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Project Management</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        <div className={`p-6 rounded-lg shadow-md mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="projectName" className="block mb-2 font-medium">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className={`w-full p-3 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter project name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectDescription" className="block mb-2 font-medium">
                Description (Optional)
              </label>
              <textarea
                id="projectDescription"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className={`w-full p-3 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter project description"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded flex items-center"
            >
              <FiPlus className="mr-2" />
              {editingId ? 'Update Project' : 'Add Project'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setProjectName('');
                  setProjectDescription('');
                }}
                className="ml-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded"
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Projects ({projects.length})</h2>

          {projects.length === 0 ? (
            <div className={`p-8 text-center rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <p className="text-lg">No projects yet. Add your first project above!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`p-6 rounded-lg shadow-md transition-all hover:shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => editProject(project)}
                        className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                        aria-label="Edit project"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700 text-red-400' : 'hover:bg-gray-200 text-red-600'}`}
                        aria-label="Delete project"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  {project.description && (
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                  )}
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Created: {new Date(project.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
