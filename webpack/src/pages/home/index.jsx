import React,{render} from 'react'
import {Router,Route,browserHistory ,IndexRoute } from 'react-router';
import ReactDOM from "react-dom";
import Test from 'CommonComponent/Test';
import Hello from 'CommonComponent/Hello';
import App from './App';

ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Test} />
            <Route path="/about" component={Hello} />
        </Route>
    </Router>,
    document.getElementById("app")
);
