// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ManagerPage from './components/ManagerPage';
import MainContent from './components/MainContent';
import StartScreen from './components/StartScreen';
import './styles/App.css';
import AchievementsPage from './components/AchievementsPage';
import { useDispatch } from 'react-redux';
import { startGameProgression } from './redux/gameSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      startGameProgression(dispatch);
  }, [dispatch]);
  
  return (
    <Router basename="/">
      <div className="app">
        <Routes>
          <Route path="/managers" element={<ManagerPage />} />
          <Route path="/game" element={<MainContent />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/" element={<StartScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
