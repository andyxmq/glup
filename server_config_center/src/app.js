import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import routes from 'Routes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory,store);

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>
,document.getElementById("app"));
