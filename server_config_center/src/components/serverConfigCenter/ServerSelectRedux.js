/**
 *@description: 包含ServerSelect需要的reducer action creator、constants
 *@author: andyxu
 */
import { loadServerList } from 'Service/serverConfigCenter/index'
import { ActionCreator } from 'Utils/utils'

const initialState = {
  loading: true,
  error: false,
  serverConfigList: [], //服务器返回数据
  currentServerName: '', //当前server名字
  serverValueList: [], //对应得serverValue list
  serviceList: [], //对应得服务节点list
  currentServerValue: undefined,//对应得server value
  currentServiceName: undefined, //当前选择的service name
  selectedConfigList: [], //选中的数据
  submitConfigList: [],//保存的选中的节点
  saveLoading: false,
  saveSuccess: undefined
};


var actionsType = {
  /**加载Server Config */
  LOAD_SERVER_CONFIG: 'LOAD_SERVER_CONFIG',
  LOAD_SERVER_CONFIG_SUCCESS: 'LOAD_SERVER_CONFIG_SUCCESS',
  LOAD_SERVER_CONFIG_ERROR: 'LOAD_SERVER_CONFIG_ERROR',

  /**servername Change*/
  ON_SERVERNAME_CHANGE: 'ON_SERVERNAME_CHANGE',
  /**domainname change */
  ON_DOMAIN_CHANGE: 'ON_DOMAIN_CHANGE',
  /**servicename change */
  ON_SERVICE_CHANGE: 'ON_SERVICE_CHANGE',
  /**选择待提交的节点*/
  ON_SELECTED_CHANGE: 'ON_SELECTED_CHANGE',
  /**保存选择配置*/
  TOGGLE_SAVE_LOADING: 'TOGGLE_SAVE_LOADING'
};

/**
 * @description 获取服务器列表
 * @param {*} dispatch 
 */
export function getServerList(dispatch){
  return async dispatch =>{
    let data = await loadServerList();
    dispatch(ActionCreator(actionsType.LOAD_SERVER_CONFIG_SUCCESS,{
      serverConfigList: data
    }));
  }
}

/**
 * @description 
 * @param {*} currentServerName 
 * @param {*} serverValueList all serverValueList data
 */
export function onServerNameChange( currentServerName, serverValueList,serviceList){
    return dispatch =>{
        dispatch(ActionCreator(actionsType.ON_SERVERNAME_CHANGE,{
            currentServerName,
            serverValueList,
            serviceList
        }));
    }
}

/**
 * @description domain数据变化
 * @param {*} currentServerValue 
 * @param {object} selectedItem
 */
export function onDomainChange(currentServerValue,selectedConfigList){
    return dispatch => {
      dispatch(ActionCreator(actionsType.ON_DOMAIN_CHANGE,{
        currentServerValue,
        selectedConfigList
      }))
    }
}

/**
 * @description 选择 service 节点
 * @param {*} value 
 * @param {object} selectedItem
 */
export function onServiceChange(currentServiceName,selectedConfigList){
    return dispatch => {
      dispatch(ActionCreator(actionsType.ON_SERVICE_CHANGE,{
        currentServiceName,
        selectedConfigList
      }));
    }
}

/**
 * @description 选择待提交的配置节点
 * @param {*} submitConfigList 
 */
export function onSelectedChange(submitConfigList){
    return dispatch => {
      dispatch(ActionCreator(actionsType.ON_SELECTED_CHANGE,{
        submitConfigList
      }));
    }
}

/**
 * 改变保存状态
 * @param {*} saveLoading 
 */
export function toggleSaveLoading(saveLoading){
    return dispatch =>{
        dispatch(ActionCreator(actionsType.TOGGLE_SAVE_LOADING,{
            saveLoading
        }));
    }
}

//todo
export function saveConfigList(configList){
    return dispatch=>{

    }
}


function serverConfigList(state = initialState,action){//reducer
  switch(action.type){
      case actionsType.LOAD_SERVER_CONFIG: {
          return {
              ...state,
              loading: true,
              error: false
          };
      } 
      case actionsType.LOAD_SERVER_CONFIG_SUCCESS: {
          return {
              ...state,
              loading: false,
              error: false,
              ...action.payload
          }
      }
      case actionsType.LOAD_SERVER_CONFIG_ERROR: {
          return {
              ...state,
              loading: false,
              error: true
          }
      }
      case actionsType.ON_SERVERNAME_CHANGE: {
          return {
              ...state,
              ...action.payload,  
              currentServerValue: undefined,
              currentServiceName: undefined
          }
      }
      case actionsType.ON_DOMAIN_CHANGE:
        return {
            ...state,
            ...action.payload, 
        }
      case actionsType.ON_SERVICE_CHANGE:
        return {
          ...state,
          ...action.payload,
        };
      case actionsType.ON_SELECTED_CHANGE:
        return {
            ...state,
            ...action.payload
        };
      case actionsType.TOGGLE_SAVE_LOADING:
        return {
            ...state,
            ...action.payload
        };
      default:
          return state;
  }
}

export default serverConfigList;