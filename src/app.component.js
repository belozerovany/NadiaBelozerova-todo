import React from 'react';
import { Header } from './header';
import { Greeting } from './greeting';
import { Number } from './number';
import { Main } from './main';
import { Footer } from './footer';

import './app.scss';

export const App = (
  <div>
    <Header />
    <Greeting
      name="Good luck today"
    />
    <Number
      from="5"
      to="7"
    />
    <Main />
    <Footer />
  </div>
);

