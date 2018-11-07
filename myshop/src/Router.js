import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import Cart from './containers/cart/Cart';
import ContactPage from './containers/contactPage/ContactPage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/contact' component={ContactPage} />
    </Switch>
);

export default Router;