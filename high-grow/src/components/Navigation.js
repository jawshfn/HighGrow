// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/game">Home</Link>
            <Link to="/managers">Managers</Link>
        </nav>
    );
}

export default Navigation;