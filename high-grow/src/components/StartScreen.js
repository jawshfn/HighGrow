// src/components/StartScreen.js
import React from 'react';
import { gsap } from "gsap";
import '../styles/StartScreen.css';

function StartScreen() {
  function handleStartClick() {
    gsap.to(".start-screen", {
      duration: 0.5,
      opacity: 0,
      y: -100,
      onComplete: () => {
        // Redirect to the game after the animation
        window.location.href = "/game";
      }
    });
  }

  return (
    <div onClick={handleStartClick} className="start-screen">
      <h1>High Grow</h1>
      <div className="start-button">Tap to Start</div>
    </div>
  );
}

export default StartScreen;
