import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SplashScreen from './components/common/SplashScreen';
import Header from './components/common/Header';

import HomePage from './pages/HomePage';
import HireMePage from './pages/HirePage';
import Register from './pages/Register';
import Login from './pages/Login';
import ProjectDetailPage from './pages/ProjectDeatilsPage';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('access_token'));
  const [showSplash, setShowSplash] = useState(true);
  const isAuthenticated = !!token;

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setToken(null); 
  };

  if (showSplash) return <SplashScreen />;

  return (
    <>
    <Router>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/hireme"
            element={isAuthenticated ? <HireMePage /> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login setToken={setToken} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </main>
    </Router>
    </>
  );
}

export default App;
