import React from 'react';
import './nav.scss';

export const Nav = (props) => {
  if (!props.list) {
    return null;
  }
  return (
    <nav className="navigation">
      <ul>
        {
          props.list.map((item, iter) => (
            <li
              key={iter}
            >
              <a href={`#!/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
