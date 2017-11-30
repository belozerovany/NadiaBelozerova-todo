import React from 'react';
import { Nav } from '../nav';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Nav list={['Home', 'Products', 'Contacts']} />
    </header>
  );
}
