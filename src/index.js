import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';


import App from './App';
import Home from './Home';
import CounterRed from './CounterRed';
import CounterBlue from './CounterBlue';
import People from './People';

const root = document.getElementById('app');

const route = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home }/>
      <Route path ="red" component = { CounterRed }/>
      <Route path = "blue" component = { CounterBlue } />
      <Route path = "people" component = { People } />
    </Route>
</Router>
)

render(route,root);
