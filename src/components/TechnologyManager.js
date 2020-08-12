import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Modal, Tabs } from 'antd';
import AddTechnology from './AddTechnology'

const { TabPane } = Tabs;

class TechnologyManager extends React.Component {
  constructor() {
    super()
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

  talkToServer = () => {
    console.log('talkToServer is running....and ya better go catch it')
    axios.post('/projects/upload', {
      projectDetails: this.state
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
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
              this.talkToServer()
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