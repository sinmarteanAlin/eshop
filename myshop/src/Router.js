import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
    </Switch>
);

export default Router;