import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { findTargetRecord } from 'Utils/utils';
import "./Serverselect.styl";
const Option = Select.Option;


class ServerSelect extends Component {
  onServerChange(value){
    let { dataSource } = this.props;
    let serverValueList = findTargetRecord(dataSource,'name',value)["value"];
    let serviceList = findTargetRecord(dataSource,'name',value)["services"];
    this.props.onChange && this.props.onChange(value,serverValueList,serviceList);
  }
  render(){
    let {dataSource: serverData} = this.props;
    return <Select 
      showSearch
      placeholder="select server name"
      optionFilterProp="children"
      onChange={this.onServerChange.bind(this)} 
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      style={{width: 200}}>
      { serverData.map(item=><Option key={item.name}>{item.name}</Option>) }
    </Select>
  }
}

ServerSelect.PropTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}
export default ServerSelect;