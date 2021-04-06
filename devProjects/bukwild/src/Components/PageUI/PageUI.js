import React from 'react';
import './PageUI.css';
import * as AiIcons from 'react-icons/ai';


export const PageUI = (props) => {
    return (
        <div className="main">
            <div className="pageUI-container">
                <div className="headline-container">
                    <h1>{props.headline}</h1>
                </div>
                <div className="subhead-container">
                    <p>{props.subhead}</p>
                </div>
            </div>
            <div className="cta-container">
                <h2 className="cta-text">{props.cta}</h2>
                <a href="#"><p className="cta-link">LET'S TALK.<AiIcons.AiOutlineArrowRight className="arrow" /></p></a>
            </div>
        </div>    
    )
}
