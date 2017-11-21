import React from 'react';
import ReactDom from 'react-dom';
import { Aside } from '../aside';
import{ Content } from '../content';
import './main.scss';

export const Main = () => {
    return (
        <div className="main">
            <Aside/>
            <Content/>
        </div>
    )
}; 