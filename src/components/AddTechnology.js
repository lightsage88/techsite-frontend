import React from "react"
import axios from "axios"
import {Spin, Form, Input, Button, Checkbox, Select} from "antd"
import Avatar from './Avatar'
const { TextArea } = Input
const { Option } = Select


class AddTechnology extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      projects: [],
      children: [],
      technologiesKnown: [],
      techTypes: []
    }
  }

  componentDidMount = () => {
    this.retrieveTechnologies()
    this.gatherTechItems()
    this.retrieveTechTypes()
  }

  gatherTechItems = () => {
    console.log('gatherTechItems running')
    axios.get('/tech')
    .then(response => {
      console.log(response.data)
      this.setState({ 
        technologiesKnown: response.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  }

  retrieveTechnologies = () => {
    return axios.get('/projects')
    .then(response => {
      console.log(response.data)
      this.setState({ 
        loading: false,
        technologies: response.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  }

  retrieveTechTypes = () => {
    return axios.get('/tech/techTypes')
    .then(response => {
      console.log('here are the tech-types', response.data)
      this.setState({ techTypes: response.data })
    })
    .catch(err => {
      console.error(err)
    })
  }
  


  render() {
    console.log(this.state)
    const techTypes = this.state.techTypes.map((item, index) => {
      return (
        <React.Fragment>
          <Option 
            key={index}
            value={item.technology_type_id}
          >
            {item.technology_type_name.toUpperCase()}
          </Option>
        </React.Fragment>
      )
    })
    
    if(this.state.loading) {
      return (
      <Spin />
      )
    } else {
      return (
        <div>
          <Form>
            <Form.Item
              label="Technology Image"
              name="technologyImage"
              onChange={e => this.props.handleChange('technologyImage', e.target.files[0])}
            >
              <Avatar />
            </Form.Item>
            <Form.Item></Form.Item>
            <Form.Item
              label="Technology Name"
              name="technologyName"
              onChange={e => this.props.handleChange('technologyName', e.target.value)}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Technology Link"
              name="technologyLink"
              onChange={e => this.props.handleChange('tech_website', e.target.value)}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Technology Type"
              name="technologyType"
            >
              <Select
                onChange={value => {
                  this.props.handleChange('tech_type', value)
                }}
              >
                {techTypes}
              </Select>
            </Form.Item>
          </Form>
        </div>
      )
    }
  }
    
}

export default AddTechnology