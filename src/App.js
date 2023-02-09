import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const user = null

  return (
    <div className="app">
      <Router>
        {!user ? (
            <LoginPage />
          ) : (
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/test' element={<div>asd</div>} />
            </Routes>
          )}
      </Router>
    </div>
  );
}

export default App;
