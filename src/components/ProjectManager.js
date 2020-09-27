import React from 'react'
import axios from 'axios'
import { Modal, Tabs } from 'antd';
import AddProject from './AddProject'
import DeleteProject from './DeleteProject'
import EditProject from './EditProject'

const { TabPane } = Tabs;

class ProjectManager extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      technologiesKnown: []
    }
    //preserve initial state in a new object
    this.baseState = this.state
    this.backendURL = "http://localhost:4007"
  }

  componentDidMount = () => {
    if(process.env.NODE_ENV === "production") {
      this.backendURL = "https://sleepy-hollows-70516.herokuapp.com"
    }
    this.retrieveProjects()
    this.gatherTechItems()
  }

  handleChange = (key, value, type) => {
    console.log(key)
    if(!type) {
      this.setState({ [key]:value })
    }

    if(type === 'json') {
      this.setState({ [key]: [value] })
    }
  }

  addImageToProject = (id, imageObject) => {
    let formData = new FormData()
    formData.append('image', imageObject)
    formData.append('id', id)

    return axios({
      url: `${this.backendURL}/projects/uploadProjectPicture`,
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
    .then(res => {
      this.resetComponent(this.props.toggleShowManageProjects, this.baseState)         
    })
    .catch(err => {
      console.error(err)
    }) 
  }
 
  resetComponent = (toggleMethod, baseState) => {
    toggleMethod()
    this.setState(baseState)
  }

  makeNewProjectRowInDB = async () => {
    let stateObject = Object.assign({}, this.state, {
      ...this.state,
      technologies: this.state.technologies.toString(), 
      projectImage: null
    })
    delete stateObject.projects
    delete stateObject.technologiesKnown
    axios.post(`${this.backendURL}/projects/upload`, {
      data: stateObject
    })
    .then(response => {
        if(this.state.projectImage) {
         this.addImageToProject(response.data.project_id, this.state.projectImage)
        } else {
          this.resetComponent(this.props.toggleShowManageProjects, this.baseState)         
        }
    })
    .catch(error => {
        console.log(error)
    })
  }

   gatherTechItems = () => {
    axios.get(`${this.backendURL}/tech`)
    .then(response => {
      this.setState({ technologiesKnown: response.data })
    })
    .catch(err => {
      console.error(err)
    })
   }

  retrieveProjects = () => {
    return axios.get(`${this.backendURL}/projects`)
    .then(response => {
      this.setState({ projects: response.data })
    })
    .catch(error => {
      console.log(error)
    })

  }

  render() {
    const projects = this.state.projects
    const technologiesKnown = this.state.technologiesKnown
      return (
        <React.Fragment>
          <Modal
            title="Project Manager Modal"
            visible={this.props.visible}
            onOk={() => {
              this.makeNewProjectRowInDB()
              }
            }
            onCancel={() => this.props.toggleShowManageProjects()}
          >
            <Tabs>
              <TabPane tab="Add" key="1">
                <AddProject
                  handleChange={this.handleChange}
                  projects={projects}
                  technologiesKnown={technologiesKnown}
                />
              </TabPane>
              <TabPane tab="Edit" key="2">
                <EditProject 
                  projects={projects}
                />
              </TabPane>
              <TabPane tab="Delete" key="3">
                <DeleteProject 
                  projects={projects}
                />
              </TabPane>
            </Tabs>
          </Modal>
        </React.Fragment>
      )
    }
  }

export default ProjectManager