import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/test' element={<div>asd</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
