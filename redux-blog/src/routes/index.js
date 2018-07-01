/**
 * 整个应用路由的配置信息
 */
import React from 'react';
import {Router,Route,IndexRoute,browserHistory,hashHistory} from 'react-router';

//导入每一个入口组件
import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';


const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home}/>
            <Route path="/detail/:id"component={Detail}/>
        </Route>
    </Router>
);

export default routes;