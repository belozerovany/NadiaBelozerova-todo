import React from 'react';
import './compName.scss';

export const ComponentName = ({ firstName, lastName, age }) => (
  <div className="user">
    <p><span>Name:</span>{firstName}</p>
    <p><span>Surname:</span>{lastName}</p>
    <p><span>Age:</span>{age}</p>
  </div>
);

export const ListComponentName = (props) => {
  const { users } = props;
  return (
    <ul className="block-users">
      {
        users.map((item, index) =>
          (<li className="block-users__li" key={index}>
            <ComponentName
              firstName={item.firstName}
              lastName={item.lastName}
              age={item.age}
            />
           </li>)
        )
      }
    </ul>
  );
};

