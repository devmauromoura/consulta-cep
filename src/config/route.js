import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import Home from '../screens/home';
import Result from '../screens/result';
import history from './history';

function Routes(){
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/consulta" component={Result} />
            </Switch>
        </Router>
    )
}

export default Routes;