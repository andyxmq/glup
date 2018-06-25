import React  from 'react'
import {Router,Route,browserHistory ,IndexRoute } from 'react-router';
import ReactDOM from "react-dom";
import Test from 'CommonComponent/Test';
import Hello from 'CommonComponent/Hello';
// import App from './App';
import DefaultLayout from 'CommonComponent/DefaultLayout';

ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/" component={DefaultLayout}>
            <IndexRoute component={Hello} />
            <Route path="about" component={Test} />
        </Route>
    </Router>,
    document.getElementById("app")
);
