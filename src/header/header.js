import { Nav } from '../nav';
import './header.scss';

export const Header = () => (
  <header className="header">
    <Nav
      list={['Home', 'Products', 'Contacts']}
    />
  </header>
);
