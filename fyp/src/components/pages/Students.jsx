import React, { useState, useEffect } from 'react';
import { Sun, Moon, PlusCircle, Trash2 } from 'lucide-react';

const App = () => {
  // State to manage the list of students
  const [students, setStudents] = useState([]);
  // State for the new student's name input
  const [newStudentName, setNewStudentName] = useState('');
  // State for the new student's grade input
  const [newStudentGrade, setNewStudentGrade] = useState('');
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

  // Function to add a new student
  const addStudent = () => {
    if (newStudentName.trim() === '' || newStudentGrade.trim() === '') {
      // Basic validation: do not add if name or grade is empty
      console.log('Student name and grade cannot be empty.');
      return;
    }
    const newStudent = {
      id: Date.now(), // Unique ID for the student
      name: newStudentName.trim(),
      grade: newStudentGrade.trim(),
    };
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setNewStudentName(''); // Clear the name input field
    setNewStudentGrade(''); // Clear the grade input field
  };

  // Function to delete a student by their ID
  const deleteStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 dark:text-indigo-400">
            Student Management
          </h1>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </header>

        {/* Add Student Section */}
        <section className="mb-8 p-6 bg-indigo-50 dark:bg-gray-700 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">Add New Student</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Student Name"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Grade"
              value={newStudentGrade}
              onChange={(e) => setNewStudentGrade(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
            />
          </div>
          <button
            onClick={addStudent}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300"
          >
            <PlusCircle size={20} /> Add Student
          </button>
        </section>

        {/* Student List Section */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">Student List</h2>
          {students.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">No students added yet. Add some students above!</p>
          ) : (
            <ul className="space-y-4">
              {students.map((student) => (
                <li
                  key={student.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300"
                >
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{student.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Grade: {student.grade}</p>
                  </div>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-700 dark:text-red-100 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    aria-label={`Delete ${student.name}`}
                  >
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
