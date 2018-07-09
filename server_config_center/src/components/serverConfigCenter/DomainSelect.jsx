import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
const Option = Select.Option;

class DomainSelect extends Component{
  onServerValueChange(value){
    this.props.onChange && this.props.onChange(value);
  }
  render() {
    let {dataSource: domainData,value} = this.props;
    return <Select 
      showSearch
      placeholder= "select server value"
      optionFilterProp="children"
      value={ value }
      onChange={this.onServerValueChange.bind(this)} 
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      style= {{width: 200}}>
      {domainData.map((item,index)=><Option key={index+''} value={ item }>{ item }</Option>)}
    </Select>
  }
}

DomainSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

export default DomainSelect;