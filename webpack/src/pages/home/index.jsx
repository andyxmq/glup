import React  from 'react'
import {Router,Route,browserHistory ,IndexRoute } from 'react-router';
import ReactDOM from "react-dom";
import {Test,DefaultLayout} from 'Components';
import {HelloContainer} from 'Comtainers'
import { createStore } from 'redux';
import {todos} from '../../common/reducer/todos';
import {Provider} from 'react-redux';

let store = createStore(todos, ['Use Redux']);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/" component={DefaultLayout}>
                <IndexRoute component={HelloContainer} />
                <Route path="about" component={Test} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
);
