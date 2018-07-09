import React,{ Component } from 'react';
import {Table} from 'antd'

class ServerList extends Component {
  constructor(props){
    super(props);
    this.columns = [
      {
        title: '服务器名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>,
      }, {
        title: '域名',
        dataIndex: 'value',
        key: 'value',
      }, {
        title: '服务器节点',
        dataIndex: 'axe_address',
        key: 'axe_address',
      }
    ]
  }
  render() {
    let that = this;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        that.props.onChange && that.props.onChange( selectedRows );
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
      }),
    };
    let {dataSource} = this.props;
    return <div>
      <Table rowSelection={rowSelection} columns={this.columns} dataSource={dataSource}/>
    </div>
  }
} 

export default ServerList;
