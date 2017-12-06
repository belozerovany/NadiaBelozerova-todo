import React from 'react';
import './number.scss';

export const Number = (props) => {
  let i = +props.from;
  const num = +props.to;
  let arr = [];
  for (i; i <= num; i++) {
    arr.push(i);
  }
  if (props.odd) {
    arr = arr.filter(elem => elem % 2 === 0);
  }
  return (
    <ul className="numbers">
      {
      arr.map((elem, i) => <li key={i}>{elem}</li>)
      }
    </ul>
  );
};
