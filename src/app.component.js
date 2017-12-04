import React from 'react';
import { Header } from './header';
import { Error } from'./error';
import { Greeting } from './greeting';
import { Number } from './number';
import { Main } from './main';
import { Footer } from './footer';

import './app.scss';

export const App = (
    <div>
        <Header/>
        <Number from ="5" to ="7" />
        <Main/>
        <Footer/>
    </div>
); 

// export const App = (
//     <div>
//         <Header/>
//         <Error
//             text="This is an arror!" 
//             color = "red"
//         />
//         <Error/>
//         <Greeting
//             name = "Nadia"
//         />
//         <Number from ="5" to ="7" odd/>
//         <Main/>
//         <Footer/>
//     </div>
// ); 
