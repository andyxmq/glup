/**
 * 生成Redux Store的关键文件 createStore
 */
import { createStore, combineReducers, compose, applyMiddleware } from  'redux';
import { routerReducer } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware)
)(createStore);

const reducer = combineReducers(Object.assign({},rootReducer,{
    routing: routerReducer
}));

export default function configureStore(initialStore){
    const store = finalCreateStore(reducer,initialStore);
    return store;
}