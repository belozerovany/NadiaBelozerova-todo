import React from 'react';
import ReactDom from 'react-dom';
import { Navigation } from '../navigation';
import { Nav } from '../nav';

import './header.scss';

export const Header = () => { 
    const text = 'Hello'
    return (
        <header className="header">
            <Nav list={['Home', 'Products', 'Contacts']} />
        </header>
    );
}