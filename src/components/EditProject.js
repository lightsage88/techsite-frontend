import React from "react"
import axios from "axios"
import {Spin, Form, Input, Button, Checkbox, Select} from "antd"
import Avatar from './Avatar'
const { TextArea } = Input
const { Option } = Select;


class EditProject extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      projects: [],
      children: []
    }

    
  }

  // const children = [];

  


  componentDidMount = () => {
    this.retrieveProjects()
  }

  gatherTechItems = () => {
    //call to table of known technology items
    

  }

  gatherTechItems = () => {
    //call to table of known technologies
    let techs = []
    for (let i = 10; i < 36; i++) {
      techs.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
  }

  

  retrieveProjects = () => {
    return axios.get('https://sleepy-hollows-70516.herokuapp.com/projects')
    .then(response => {
      console.log(response.data)
      this.setState({ 
        loading: false,
        projects: response.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  }

  handleChange = value => {
    console.log(`selected ${value}`)
  }


  render() {
    console.log(this.state)
    
    let projects = this.state.projects.map((item,index) => {
      return(
        <div key={index}>
          <Form>
            <Form.Item
              label="Project Image"
              name="projectImage"
            >
              <Avatar />
            </Form.Item>
            <Form.Item
              label="Project Name"
              name="projectName"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Project Link"
              name="projectLink"
            >
              <Input
                onChage
              />
            </Form.Item>
            <Form.Item
              label="Repo Link"
              name="repoLink"
            >
              <Input 
                onChange={e => this.setState({ repoLink: e.target.value })}
              />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
            >
              <TextArea 
                onChange={e => this.setState({ description: e.target.value })}
              />
            </Form.Item>
            <Form.Item
              label="Languages"
              name="languages"
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['Javascript']}
                onChange={this.handleChange}
              >
                {this.state.children}
              </Select>
            </Form.Item>
          </Form>
        </div>
      )
    })

    if(this.state.loading) {
      return (
      <Spin />
      )
    } else {
      return (
        <div>
          {projects}
        </div>
      )
    }
  }
    
}

export default EditProject