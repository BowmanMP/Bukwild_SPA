import React from 'react';
import logo from '../../Images/abc_logo.svg';
import { PAGE_TITLES } from '../../constants';
import Flip from 'react-reveal/Flip';

import './Header.css';
import '../NavMenu/NavMenu.css';

export const Header = ({activePage, setActivePage}) => {
    
    const onClick = (e) => {
        const { id } = e.currentTarget;
        const index = Object.values(PAGE_TITLES).findIndex((pageTitle) => pageTitle === id);
        setActivePage(index);
    }
    
    return (
        <div className="flex-container">
            <div className="navMenu">
                <img src={logo} className="logo" alt="Abc logo" />
                <div >
                    <ul>
                        <li 
                            id={PAGE_TITLES.industries}
                            onClick={onClick}
                        >
                            {PAGE_TITLES.industries}
                        </li>
                        <li 
                            id={PAGE_TITLES.services}
                            onClick={onClick}
                        >
                            {PAGE_TITLES.services}
                        </li>
                        <li 
                            id={PAGE_TITLES.aboutUs}
                            onClick={onClick}
                        >
                            {PAGE_TITLES.aboutUs}
                        </li>
                    </ul>
                </div>
            </div>
            <button className="contactBtn">
                Contact Us
            </button>
        </div>
    )
}
