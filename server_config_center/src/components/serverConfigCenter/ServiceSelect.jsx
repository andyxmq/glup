import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
const Option = Select.Option;

class ServiceSelect extends Component{
  onServiceChange(value){
    this.props.onChange && this.props.onChange(value);
  }
  render() {
    let {dataSource: servicesData,value} = this.props;
    return <Select 
      showSearch
      placeholder= "select a service"
      optionFilterProp="children"
      value={ value }
      onChange={this.onServiceChange.bind(this)} 
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      style={{width: 200}}>
      {servicesData.map((item,index)=><Option key={index+''} value={item.axe_address} >{item.axe_address}</Option>)}
    </Select>
  }
}

ServiceSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ServiceSelect;