import { ListComponentName } from '../compName';
import { BtnBg } from '../btnBg';
import { Timer } from '../timer';
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
    <Timer />
    <BtnBg />
  </div>
);
