import React from "react"
import { Menu, Anchor } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {ReactComponent as PhilanthropyLogo} from '../svgs/philanIcon.svg'
var pic = require('../svgs/philanIcon.png')

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
  }

  toggleShowLoginModal = () => {
    console.log('running toggleShowLoginModal', this.props)
    this.props.toggleShowLoginModal()
  }

  render() {
    return (
     <>
      <Menu
          theme="dark"
          onClick={this.handleClick}
          // defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu className="menuCustom" key="sub1" icon={<img id="philanthropyIcon" src={pic} />} title="M E N U">
            {/* <Anchor> */}
              <Menu.Item key="1">
                <a 
                  onClick={(e) => this.handleClick(e)}
                  href="#aboutLand">
                  About
                </a>
              </Menu.Item>
              <Menu.Item key="2">
                <a 
                  onClick={(e) => this.handleClick(e)}
                  href="#projectLand">
                  Projects
                </a>
              </Menu.Item>
              <Menu.Item key="3">
                <a
                  onClick={(e) => this.handleClick(e)}
                  href="#articlesDiv">
                  Articles
                </a>
              </Menu.Item>
              <Menu.Item key="4">
                <a
                  onClick={(e) => this.handleClick(e)}
                  href="#contactLand">
                  Contact
                </a>
              </Menu.Item>
              <Menu.Item key="5">
                {
                  this.props.loggedIn
                    ? <p onClick={() => {
                      this.props.toggleLoggedIn() 
                      this.props.toggleShowLoginModal()
                    }}>Logout</p>
                    : <p onClick={this.toggleShowLoginModal}>Login</p>
                }
              </Menu.Item>
          </SubMenu>
        </Menu>
     </>
    )
  }
}

export default MenuComponent