import React from "react"
import axios from "axios"
import {Spin, Form, Input, Button, Checkbox, Select} from "antd"
import Avatar from './Avatar'
import { base64ToImage } from '../helperMethods/base64ToImage'
const { TextArea } = Input
const { Option } = Select

class AddProject extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      projects: [],
      children: [],
      technologiesKnown: []
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('hip hop tunes', props, state)

    let loading = props.technologiesKnown.length > 0
      ? false
      : true

    return {
      loading: loading,
      projects: props.projects,
      technologiesKnown: props.technologiesKnown
    }
  }

  render() {
    console.log(this.state)
    const technologiesKnown = this.props.technologiesKnown.map((item, index) => {
      const imageSrc = base64ToImage(item)
      
      return (
        <React.Fragment>
          <Option 
            key={index}
            value={item.tech_id}
          >
            <img
              className="iconImage"
              src={imageSrc}
            /> 
            {' ' + item.name}
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
              label="Project Image"
              name="projectImage"
              onChange={e => { this.props.handleChange('projectImage', e.target.files[0]) }
              }
            >
              <Avatar />
            </Form.Item>
            <Form.Item
              label="Project Name"
              name="projectName"
              onChange={e => this.props.handleChange('projectName', e.target.value)}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Project Link"
              name="projectLink"
              onChange={e => this.props.handleChange('projectLink', e.target.value)}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Repo Link"
              name="repoLink"
              onChange={e => this.props.handleChange('repoLink', e.target.value)}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="API/Other Repo Link"
              name="apirepoLink"
              onChange={e => this.props.handleChange('apirepoLink', e.target.value)}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              onChange={e => this.props.handleChange('description', e.target.value)}
            >
              <TextArea/>
            </Form.Item>
            <Form.Item
              label="Technologies"
              name="technologies"
            >
              <Select
                style={{ width: '100%' }}
                mode="multiple"
                placeholder="Please select"
                onChange={value => this.props.handleChange('technologies', value, 'json')}
                >
                {technologiesKnown}
              </Select>
            </Form.Item>
          </Form>
        </div>
      )
    }
  }
}

export default AddProject