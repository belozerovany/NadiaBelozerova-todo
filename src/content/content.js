import { ListComponentName } from '../compName';
import './content.scss';

const users = [
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

export const Content = () => (
  <div className="content">
    <ListComponentName
      users={users}
    />
  </div>
);
