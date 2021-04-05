import React from 'react';
import './PageUI.css';


export const PageUI = () => {
    return (
        <div>
            <div className="pageUI-container">
                <div className="headline-container">
                    <h1>Lorem ipsum dolor sit amet poopy shitty face</h1>
                </div>
                <div className="subhead-container">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
            <div className="cta-container">
                <h2 className="cta-text">Nemo enim ipsam voluptatem quia voluptas.</h2>
                <a><p className="cta-link">LET'S TALK</p></a>
            </div>
        </div>    
    )
}
