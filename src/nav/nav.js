import React from 'react';
import'./nav.scss';

export const Nav = (props) => {
    const navigation = props.list;
    console.log('navigation',navigation);
    return (
        <nav className="navigation">
            <ul>
                {  
                    props.list.map((item, iter) => 
                        <li key = {item}>
                            <a href ={'#!/'+item.toLowerCase()}>{item}</a>
                        </li>
                    )
                }
            </ul>
        </nav>    
    );
}