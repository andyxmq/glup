/**
 * reducer action creator整合起来
 * 包含了ServerConfigCenter页面所有组件相关的reducer actionCreator
 */
import {combineReducers} from 'redux';

//引入 reducer
import serverSelectReducer from 'ServerConfigCenter/ServerSelectRedux';
// import domainSelectReducer from 'ServerConfigCenter/DomainSelectRedux';
// import serviceSelectReducer from 'ServerConfigCenter/ServiceSelectRedux';

//引入 action
export { 
  getServerList, 
  onServerNameChange,
  onDomainChange,
  onServiceChange,
  toggleSaveLoading,
  saveConfigList,
  onSelectedChange } from 'ServerConfigCenter/ServerSelectRedux';
// export { onDomainChange } from 'ServerConfigCenter/DomainSelectRedux';
// export { onServiceChange } from 'ServerConfigCenter/ServiceSelectRedux';

export default combineReducers({
  serverSelectReducer,
  // domainSelectReducer,
  // serviceSelectReducer
});