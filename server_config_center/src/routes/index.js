/**
 * 整个应用路由的配置信息
 */
import React from 'react';
import {Router,Route,IndexRoute,browserHistory,hashHistory} from 'react-router';

//导入每一个入口组件
import Frame from 'Layouts/Frame';
import ServerConfigCenter from 'Views/ServerConfigCenter';
// import Detail from '../views/Detail';


function routes(history){
  return <Router history={history}>
    <Route path="/" component={Frame}>
        <IndexRoute component={ServerConfigCenter}/>
    </Route>
  </Router>
};

export default routes;