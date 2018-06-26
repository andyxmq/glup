import React  from 'react'
import {Router,Route,browserHistory ,IndexRoute } from 'react-router';
import ReactDOM from "react-dom";
import {Test,Hello,DefaultLayout} from 'CommonComponent';

ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/" component={DefaultLayout}>
            <IndexRoute component={Hello} />
            <Route path="about" component={Test} />
        </Route>
    </Router>,
    document.getElementById("app")
);
