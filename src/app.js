import React from 'react';
import ReactDom from 'react-dom';

import { Navigation } from './Navigation';

// const paint = () => {
//     const time = React.createElement('time',null, `Time is ${new Date().toLocaleTimeString()}`);
    
//     const component = React.createElement('h1',null, 'Hello, reacr easycode!',time);
//     ReactDom.render (component, document.getElementById('app'));
// }


// const paint = () => {
//     const time = React.createElement('time',null, `Time is ${new Date().toLocaleTimeString()}`);
    
//     const component = <h1>'Hello, reacr easycode!'{ time }</h1>; 
//     ReactDom.render (component, document.getElementById('app'));
// }
//setInterval(paint, 1000);

const Component = (
    <div>
        <h1>'Hello, reacr easycode!'</h1>
        <Navigation/>
    </div>
); 
ReactDom.render (Component, document.getElementById('app'));


