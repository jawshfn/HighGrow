// src/components/HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css'; // Importing CSS

function HomeScreen() {
  return (
    <Link to="/game" className="home-screen">
      <h1>High Grow</h1>
      <div className="start-button">Tap to Start</div>
    </Link>
  );
}

export default HomeScreen;
