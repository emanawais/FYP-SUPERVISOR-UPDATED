import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="sticky top-0 z-40">
      <header className="bg-white shadow-md w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            FYPSupervisor
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6 items-center">
              {user && (
                <>
                  <li>
                    <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)}>
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/students" onClick={() => setMobileMenuOpen(false)}>
                      Students
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/meetings" onClick={() => setMobileMenuOpen(false)}>
                      Meetings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" onClick={() => setMobileMenuOpen(false)}>
                      Profile
                    </NavLink>
                  </li>
                </>
              )}
              
              {!user && !loading && (
                <>
                  <li>
                    <NavLink to="/login" onClick={() => setMobileMenuOpen(false)}>
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <Link 
                      to="/signup" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-md transition duration-300 text-sm lg:text-base"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              
              {user && (
                <li>
                  <button 
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-md transition duration-300 text-sm lg:text-base"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none transition duration-300" 
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div 
          className={`absolute inset-0 bg-gray-900 bg-opacity-90 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMobileMenu}
        />
        
        <div 
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link 
                to="/" 
                className="text-xl font-semibold text-gray-800"
                onClick={toggleMobileMenu}
              >
                FYPSupervisor
              </Link>
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-red-600 focus:outline-none transition duration-300" 
                aria-label="Close Mobile Navigation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-3">
                {user && (
                  <>
                    <MobileNavLink to="/" onClick={toggleMobileMenu}>
                      Dashboard
                    </MobileNavLink>
                    <MobileNavLink to="/projects" onClick={toggleMobileMenu}>
                      Projects
                    </MobileNavLink>
                    <MobileNavLink to="/students" onClick={toggleMobileMenu}>
                      Students
                    </MobileNavLink>
                    <MobileNavLink to="/meetings" onClick={toggleMobileMenu}>
                      Meetings
                    </MobileNavLink>
                    <MobileNavLink to="/profile" onClick={toggleMobileMenu}>
                      Profile
                    </MobileNavLink>
                  </>
                )}
                
                {!user && !loading && (
                  <>
                    <MobileNavLink to="/login" onClick={toggleMobileMenu}>
                      Login
                    </MobileNavLink>
                    <li>
                      <Link 
                        to="/signup" 
                        onClick={toggleMobileMenu}
                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md transition duration-300 mt-4"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            
            {user && (
              <div className="p-4 border-t">
                <button 
                  onClick={() => {
                    toggleMobileMenu();
                    handleLogout();
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable NavLink component for desktop
const NavLink = ({ to, onClick, children }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-gray-600 hover:text-blue-600 transition duration-300 text-sm lg:text-base"
  >
    {children}
  </Link>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ to, onClick, children }) => (
  <li>
    <Link 
      to={to} 
      onClick={onClick}
      className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
    >
      {children}
    </Link>
  </li>
);

export default Navbar;