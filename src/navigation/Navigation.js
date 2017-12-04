import React from 'react';
import ReactDom from 'react-dom';
import './navigation.scss';

const items = ['Home', 'Gallery','Contacts'];
export const Navigation = () =>{ 

    return (
        <nav className="main-nav">
            <ul>
                {
                    items.map((i, index) => 
                        <li key = {index}>
                            <a href ={'#!/'+i.toLowerCase()}>{i}</a>
                        </li>
                    )          
                }
            </ul>
        </nav>
    );
}
