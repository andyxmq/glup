import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import './frame.styl'

class Frame extends Component{
  render(){
    return <Layout>
      <Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">一点资讯</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px',display: 'flex',flexDirection: "column" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>pandora</Breadcrumb.Item>
          <Breadcrumb.Item>API配置中心</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24,flex: 'auto' }}>{this.props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        一点 Design ©2018 Created by front end
      </Footer>
    </Layout>  
  }
}
export default Frame;