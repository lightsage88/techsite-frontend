import React from "react"
import { Menu, Anchor } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {ReactComponent as PhilanthropyLogo} from '../svgs/philanIcon.svg'

const { Link } = Anchor
const { SubMenu } = Menu


class MenuComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      current: '1'
    }
  }

  handleClick = (e) => {
    this.setState({ current: e.key })
  };


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
          <SubMenu className="menuCustom" key="sub1" icon={<PhilanthropyLogo />} title="M E N U">
            {/* <Anchor> */}
              <Menu.Item key="1">
                <a 
                  onClick={(e) => this.handleClick(e)}
                  href="#aboutLand">
                  About
                </a>
              </Menu.Item>
              <Menu.Item key="2">
                {/* <Link href="2" title="Projectos"> */}
                <a 
                  onClick={(e) => this.handleClick(e)}
                  href="#projectLand">
                  Projects
                </a>
                {/* </Link> */}
              </Menu.Item>
              <Menu.Item key="3">Contact</Menu.Item>
            {/* </Anchor> */}
          </SubMenu>
        </Menu>
     </>
    )
  }
}

export default MenuComponent