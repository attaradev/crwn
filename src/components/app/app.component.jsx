import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.style.scss';
import { Homepage } from './../../pages/homepage/homepage.component';
import { ShopPage } from './../../pages/shop/shop.component';

export const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};
