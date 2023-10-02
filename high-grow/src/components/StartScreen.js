// src/components/StartScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StartScreen.css';

function StartScreen() {
  return (
    <Link to="/game" className="start-screen">
      <h1>High Grow</h1>
      <div className="start-button">Tap to Start</div>
    </Link>
  );
}

export default StartScreen;
