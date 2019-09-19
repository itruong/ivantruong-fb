import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import './index.css';
import Main from './js/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Redirect to='/'/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();
