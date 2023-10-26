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
      <title>Neon City</title>
     <h1>Tap to Start</h1> 
      
    </div>
);
}

export default StartScreen;
