import React from "react"
import axios from "axios"
import {Spin, Form, Input, Button, Checkbox, Select} from "antd"
import Avatar from './Avatar'
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

  arrayBufferToBase64 = buffer => {
    var binary = ''
    var bytes = new Uint8Array( buffer )
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] )
    }
    return window.btoa( binary )
  }


  render() {
    console.log(this.state)
    const technologiesKnown = this.props.technologiesKnown.map((item, index) => {
      console.log('wolcochoHOSO', item)
      const imageSrc = 
        item.image 
          ? `data:${item.mimetype};base64,${this.arrayBufferToBase64(item.image.data)}`
          : null
      
      return (
        <React.Fragment>
          <Option 
            key={index}
            value={item.name}
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