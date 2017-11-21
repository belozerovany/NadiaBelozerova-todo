import React from 'react';
import ReactDom from 'react-dom';
import { Navigation } from '../navigation';

import './header.scss';

export const Header = () =>{ 
    const text = 'Hello'
    return (
        <header className="header">
            <Navigation/>
        </header>
    );
}