import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Product from './component/Product/Product';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';

import Home from './Home';

export default (
    <Switch>
        <Route path='/Dashboard' component={ Dashboard } />
        <Route path='/Form' component={ Form } />
    </Switch>
)

