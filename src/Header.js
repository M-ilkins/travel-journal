import React from 'react';
import headerLogo from './images/Fill 213.png';


export default function Header() {
    return (
        <nav>
            <img src={headerLogo}></img>
            <p>My Travel Journal</p>
        </nav>
    )
};