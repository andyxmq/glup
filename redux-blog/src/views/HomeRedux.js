/**
 * reducer action creator整合起来
 * 
 * 包含了Home页面所有组件相关的reducer actionCreator
 */
import {combineReducers} from 'redux';

//引入reducer及actionCreator
import list from '../components/Home/PreviewListRedux';

export default combineReducers({
    list
});

import * as listAction from '../components/Home/PreviewListRedux';

export const listAction;