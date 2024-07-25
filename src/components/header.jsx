import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">BrainBoost</div>
            <nav className="nav">
                <a href="#courses">Courses</a>
                <a href="#login">Login</a>
            </nav>
        </header>
    );
};

export default Header;
