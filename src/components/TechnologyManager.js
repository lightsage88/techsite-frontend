import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Modal, Tabs } from 'antd';
import AddTechnology from './AddTechnology'

const { TabPane } = Tabs;

class TechnologyManager extends React.Component {
  constructor() {
    super()
    this.state = {}
    //establish baseState
    this.baseState = this.state
  }

  resetComponent = (toggleMethod, baseState) => {
    toggleMethod()
    this.setState(baseState)
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

  makeNewTechRowInDB = () => {
    console.log("PAISHO", this.state)
    const dataObject = Object.assign({}, this.state, {
      ...this.state,
      technologyImage: null
    })
    
    return axios.post('https://sleepy-hollows-70516.herokuapp.com/tech/upload', {
      data: dataObject
    })
    .then(response => {
      console.log(response)
      if(this.state.technologyImage){
        this.addPictureToTechKnownRow(response.data.tech_id, this.state.technologyImage)
      } else {
        this.resetComponent(this.props.toggleShowTechnologyManager, this.baseState)
      }
    })
    .catch(err => {
      console.error(err)
    })
  }

  addPictureToTechKnownRow = (id, imageObject) => {
    console.log('addPictureToTechKnownRow running...')
    let formData = new FormData()
    formData.append('image', imageObject)
    formData.append('id', id)

    return axios({
      url: "https://sleepy-hollows-70516.herokuapp.com/tech/uploadTechImage",
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
    .then(res => {
      console.log(res)
      this.resetComponent(this.props.toggleShowTechnologyManager, this.baseState)
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
      return (
        <React.Fragment>
          <Modal
            title="Technology Manager Modal"
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
              this.makeNewTechRowInDB()
              }
            }
            onCancel={() => this.props.toggleShowTechnologyManager()}
          >
            <Tabs>
              <TabPane tab="Add" key="1">
                <AddTechnology
                  handleChange={this.handleChange}
                />
              </TabPane>
            </Tabs>
          </Modal>
        </React.Fragment>
      )
    }
  }

export default TechnologyManager