import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './register';
import Home from './home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </BrowserRouter>
);