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
      technologiesKnown: []
    }
  }

  componentDidMount = () => {
    this.retrieveTechnologies()
    this.gatherTechItems()
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


    //call to table of known technologies
      // type
      // name
      // picture (svgporn)

    // let techs = []
    // for (let i = 10; i < 36; i++) {
    //   techs.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
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
    return axios.get('/techTypes')
    .then(response => {
      console.log('here are the tech-types', response.data)

    })
    .catch(err => {
      console.error(err)
    })
  }
  


  render() {
    console.log(this.state)
    
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
              onChange={e => this.props.handleChange('=technologyImage', e.target.value)}

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
              onChange={e => this.props.handleChange('projectLink', e.target.value)}
            >
              <Input/>
            </Form.Item>
          </Form>
        </div>
      )
    }
  }
    
}

export default AddTechnology