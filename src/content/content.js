import React from 'react';
import ReactDom from 'react-dom';
import { ComponentName, ListComponentName } from '../compName';
import './content.scss';

let users = [
  {
    firstName: 'Petia',
    lastName: 'Petrov',
    age: '25'
  },
  {
    firstName: 'Petia',
    lastName: 'Petrov',
    age: '25'
  },
  {
    firstName: 'Petia',
    lastName: 'Petrov',
    age: '25'
  }
];
export const Content = () => {
  return (
    <div className="content">
      <ListComponentName
        users={users}
      />
    </div>
  )
}
