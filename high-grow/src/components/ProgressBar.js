// src/components/ProgressBar.js
import React from 'react';
import '../styles/ProgressBar.css';

function ProgressBar({ progress, max }) {
    const progressPercentage = (progress / max) * 100;
    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
            <div className="progress-label">{progressPercentage ? progressPercentage.toFixed(0) : '0'}%</div>
        </div>
    );
}

export default ProgressBar;
