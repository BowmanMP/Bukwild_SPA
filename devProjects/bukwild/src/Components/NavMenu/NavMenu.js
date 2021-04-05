import React from 'react';
import './NavMenu.css';

export const NavMenu = () => {
    
    const changeTextColor = (e) => {
        e.target.style.color = 'red';
    }
    
    return (
        <div className="navMenu">
            <ul>
                    <li><a>Industries</a></li>
                    <li><a>Services</a></li>
                    <li><a>About Us</a></li>
                </ul>
        </div>
    )
}
