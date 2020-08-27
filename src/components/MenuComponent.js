import React from "react"
import { Menu} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const philanIcon = require('../svgs/philanIcon.svg')

const { SubMenu } = Menu

class MenuComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      current: '1'
    }
  }


  render() {
   
    return (
     <>
      <Menu
          theme="dark"
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu className="menuCustom" key="sub1" icon={<MailOutlined />} title="M E N U">
            <Menu.Item key="1">About</Menu.Item>
            <Menu.Item key="2">Projects</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </SubMenu>
        </Menu>
     </>
    )
  }
}

export default MenuComponent