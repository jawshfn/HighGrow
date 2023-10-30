// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation-container">
            <Link to="/">Home</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/managers">Managers</Link>
        </nav>
    );
    
}

export default Navigation;