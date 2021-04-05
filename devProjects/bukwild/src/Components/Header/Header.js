import React from 'react';
import './Header.css';
import logo from '../../Images/abc_logo.svg';
import { NavMenu } from '../NavMenu/NavMenu';


export const Header = () => {
    return (
        <div className="flex-container">
            <div className="navMenu">
                <img src={logo} className="logo" alt="Abc logo" />
                <div>
                    <NavMenu />
                </div>
            </div>
            <button className="contactBtn">
                Contact Us
            </button>
        </div>
    )
}
