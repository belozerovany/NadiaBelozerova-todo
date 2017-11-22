import React from 'react';
import ReactDom from 'react-dom';
import './aside.scss';

export const Aside = () =>{
    const text = 'ASIDE';
    return (
        <div className='aside'><p>{text}</p></div>
    )
}