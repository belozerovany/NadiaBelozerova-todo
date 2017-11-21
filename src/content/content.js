import React from 'react';
import ReactDom from 'react-dom';
import './content.scss';

export const Content = () =>{
    const text = 'content'
    return (
        <div className="content">
            <p>{text}</p>
        </div>
    )
}