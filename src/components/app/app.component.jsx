import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.style.scss';
import { Homepage } from './../../pages/homepage/homepage.component';
import { HatsPage } from './../../pages/hats-page/hats-page.component';

export const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
};
