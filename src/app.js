
import ReactDom from 'react-dom';
import { App } from './app.component'


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


ReactDom.render (App, document.getElementById('app'));


