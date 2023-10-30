// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManagerPage from './components/ManagerPage';
import MainContent from './components/MainContent'; // MainContent component
import StartScreen from './components/StartScreen'; // Updated import
import './styles/App.css';
import AchievementsPage from './components/AchievementsPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/managers" element={<ManagerPage />} />
          <Route path="/game" element={<MainContent />} /> {/* MainContent component */}
          <Route path="/achievements" element={<AchievementsPage /> } />
          <Route path="/" element={<StartScreen />} /> {/* Updated Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
