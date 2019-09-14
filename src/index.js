import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Redirect,
  Route,
} from "react-router-dom";
import './index.css';
import Main from './js/Main';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={Main}/>
    <Redirect to='/'/>
  </BrowserRouter>,
  document.getElementById('root')
);
