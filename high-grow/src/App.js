// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManagerPage from './components/ManagerPage';
import HomeScreen from './components/HomeScreen';
import MainContent from './components/MainContent'; // Importing MainContent component
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/managers" element={<ManagerPage />} />
          <Route path="/game" element={<MainContent />} /> {/* Using MainContent component */}
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
