import React from 'react'
import ProjectManager from './ProjectManager'
import TechnologyManager from './TechnologyManager'
import { Button } from 'antd'
import axios from 'axios'

class Header extends React.Component {
  constructor(){
    super()

    this.state = {
      showManageProjects: false,
      showTechnologyManager: false
    }
    this.bochoRef = React.createRef()
  }

  showProjectManager = () => {
    console.log('showprojectmanager running')
    return (
      <ProjectManager />
    )
  }

  toggleShowManageProjects = () => {
    console.log('toggleShowManageProjects')
    this.setState({ showManageProjects: !this.state.showManageProjects })
  }
  
  toggleShowTechnologyManager = () => {
    console.log('toggleShowTechnologyManager')
    this.setState({ showTechnologyManager: !this.state.showTechnologyManager })
  }


  render() {
    return (
      <div id="headerDiv">
        <ProjectManager 
          visible={this.state.showManageProjects}
          toggleShowManageProjects={this.toggleShowManageProjects}
        />
        <Button
          onClick={this.toggleShowManageProjects}
        >
          {
            this.state.showManageProjects
              ? "CLOSE "
              : "OPEN "
          }
          Manage Projects
        </Button>
        <TechnologyManager 
          visible={this.state.showTechnologyManager}
          toggleShowTechnologyManager={this.toggleShowTechnologyManager}
        />
        <Button
          onClick={this.toggleShowTechnologyManager}
        >
          {
            this.state.showTechnologyManager
              ? "CLOSE "
              : "OPEN "
          }
          Manage Technologies
        </Button>
      </div>
    )
  }
}

export default Header