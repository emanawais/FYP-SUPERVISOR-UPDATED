// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./components/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import Meetings from "./components/pages/Meetings";
import Profile from "./components/pages/Profile";
import Projects from "./components/pages/Projects";
import Students from "./components/pages/Students";
import Dashboards from "./components/pages/Dashboards";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboards />
        </ProtectedRoute>
      } />
      <Route path="/meetings" element={
        <ProtectedRoute>
          <Meetings />
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/projects" element={
        <ProtectedRoute>
          <Projects />
        </ProtectedRoute>
      } />
      <Route path="/students" element={
        <ProtectedRoute>
          <Students />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;