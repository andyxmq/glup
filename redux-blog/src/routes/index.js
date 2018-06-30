/**
 * 配置整个路由的配置信息
 */
import React from 'react';
import {Router,Route,IndexRoute,browserHistory,hashHistory} from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home}/>
            <Route path="/detail"component={Detail}/>
        </Route>
    </Router>
);

export default routes;