import React,{ Component } from 'react';

import DomainSelect from 'ServerConfigCenter/DomainSelect';
import ServerSelect from 'ServerConfigCenter/ServerSelect';
import ServiceSelect from 'ServerConfigCenter/ServiceSelect';
import ServerList from 'ServerConfigCenter/ServerList';

import { Button,message } from 'antd';
import { connect } from 'react-redux';

import { isEqual } from 'Utils/utils';

import "./serverConfigCenter.styl";
import * as actions from "./ServerConfigCenterRedux"
delete actions.default;

function itemIsExistence(array,item){
  for(var key in array){
    let oldItem = array[key];
    if(isEqual(oldItem,item)){
      return true;
    }
  }
  return false;
}

class ServerConfigCenter extends Component{
  constructor( props ){
    super(props);
  }

  componentDidMount(){
    this.props.getServerList();
  }

  onDomainChangeProxy(value){
    let { currentServerName,currentServiceName,selectedConfigList } = this.props.serverSelectReducer;
    let item = {name:currentServerName,value,axe_address:currentServiceName};
    if(currentServiceName && currentServerName && !itemIsExistence(selectedConfigList,item)){
      selectedConfigList.push(item);
      this.props.onDomainChange(value,selectedConfigList);
      return;
    }
    this.props.onDomainChange(value,selectedConfigList);
  }

  onServiceChangeProxy(value){
    let { currentServerName,currentServerValue,selectedConfigList } = this.props.serverSelectReducer;
    let item = { name: currentServerName,value: currentServerValue, axe_address: value};
    if(currentServerValue && currentServerName && !itemIsExistence(selectedConfigList,item)){
      selectedConfigList.push(item);
      this.props.onServiceChange(value,selectedConfigList);
      return;
    }
    this.props.onServiceChange(value,selectedConfigList);
  }

  saveServerConfigProxy(){ 
    let { submitConfigList,selectedConfigList } = this.props.serverSelectReducer;
    let { toggleSaveLoading } = this.props;
    if(selectedConfigList.length <=0 ){
      return message.info('请选择需要设置节点');
    }
    if(submitConfigList.length <= 0){//submitConfigList为空 则全部提交
      submitConfigList = selectedConfigList;
    }
    
    toggleSaveLoading(true);
    debugger;
  }

  render() {
    let { serverConfigList,
          serverValueList,
          serviceList,
          currentServerValue,
          currentServiceName,
          selectedConfigList, 
          saveLoading} = this.props.serverSelectReducer;
    let { onServerNameChange,onSelectedChange, } = this.props;

    return <div className="server-container">
      <div className="header">
        请选择需要设置的节点
      </div>
      <div className="main">
        <ServerSelect dataSource={ serverConfigList } onChange={ onServerNameChange }/>
        <DomainSelect dataSource={ serverValueList } value={ currentServerValue } onChange={this.onDomainChangeProxy.bind(this)}/>
        <ServiceSelect dataSource={ serviceList } value={currentServiceName} onChange={this.onServiceChangeProxy.bind(this)}/>
      </div>
      <div className="footer">
        <div>
          <span>当前选择的节点为:</span> 
          <Button type="primary" size="small" 
            style={{float: "right", marginTop: '10px'}}
            loading = {saveLoading}
            onClick={this.saveServerConfigProxy.bind(this)}>
            保存
          </Button>
        </div>
        <ServerList dataSource={ selectedConfigList } onChange={onSelectedChange}/>
      </div> 
    </div>
  }
}
ServerConfigCenter.propTypes = {
  
}
export default connect(state=>{
  return Object.assign( {}, state.serverConfigCenter);
},{
  ...actions
})(ServerConfigCenter);