import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
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
  }

  componentDidMount = () => {
    this.retrieveProjects()
    this.gatherTechItems()
  }

  componentDidUpdate = prevState => {
    // if(this.state !== prevState && !this.state.projectImage) {
    //   if(localStorage.getItem("imageUrlCode")) {
    //     this.setState({ projectImage: localStorage.getItem("imageUrlCode") })
    //   }
    // }
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
    console.log('addImageToProjectRunning', id, imageObject)
    let formData = new FormData()
    formData.append('image', imageObject)
    formData.append('id', id)

    return axios({
      url: "/projects/uploadProjectPicture",
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })

    // return axios.post('/projects/uploadProjectPicture', formData, { 
    // headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(err => {
    //   console.error(err)
    // })

  }
 
  //TODO: Upload the project, get the id name, then upload the photo and place it into the row
  //with the ID name from the response 
  //Simple and Doubling back

  talkToServer = async () => {
    console.log('talkToServer is running....and ya better go catch it', this.state)
    let fileObject = this.state.projectImage
    let stateObject = Object.assign({}, this.state, {
      ...this.state,
      projectImage: null
    })
    let formData = new FormData()
    formData.append('image', fileObject)
    // formData.append('id', id)
    // formData.append('data', stateObject)
    console.log(stateObject)
    // axios.post('/projects/upload', {
    //   projectDetails: stateObject
    // })
    // .then(response => {
    //     console.log(response)
    //     if(this.state.projectImage) {
    //      this.addImageToProject(response.data.insertId, fileObject)
    //     }
    //     // localStorage.removeItem("imageUrlCode")
    // })
    // .catch(error => {
    //     console.log(error)
    // })
    return axios({
      url: "/projects/upload",
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: {formData, stateObject}
      // body: stateObject
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }

   gatherTechItems = () => {
    console.log('gatherTechItems running')
    axios.get('/tech')
    .then(response => {
      console.log(response.data)
      this.setState({ technologiesKnown: response.data })
    })
    .catch(err => {
      console.error(err)
    })
   }

  retrieveProjects = () => {
    console.log('projectManager is getting dem \'jects ')
    return axios.get('/projects')
    .then(response => {
      console.log(response)
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
              // receive details from child element (add/edit/delete) that was open when ok was pressed
                // include data-bit to indicate what kind of operation it is
              // If the operation is ADD:
                //  call method that allows us to add new project to our database via our backend server
              // If the operation is EDIT:
                // call method that allows us to edit existing project to our database via our backend server
              // If the operation is DELETE:
                // call method taht allows us to DELETE existing project in our database via our b-e server
             // then at the end run this ---> this.props.toggleShowManageProjects()
              console.log(this.state)
              this.talkToServer()
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