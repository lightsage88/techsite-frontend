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

  // componentDidUpdate = prevProps => {
  //   console.log('we updated', prevProps)
  //   if (prevProps.technologiesKnown != this.props.technologiesKnown) {
  //     console.log('funny things')
  //     if (this.props.technologiesKnown.length > 0) {
  //       console.log('bocho things')
  //       this.setState({ loading: false })
  //     }
  //   }
  // }

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

  avatarChildUpdatesParent = (imageUrl) => {
    console.log('avatarchild giving parent an update son', imageUrl)
    if(!this.state.imageUrlForNewProject)
    this.setState({ imageUrlForNewProject: imageUrl })
  }

  render() {
    console.log(this.state)
    const technologiesKnown = this.props.technologiesKnown.map((item, index) => {
      return (
        <React.Fragment>
          <Option 
            key={index}
            value={item.name}
          >
            {item.name}
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
              onChange={e => {
                  // console.log(e.target.files[0])
                  // if(this.state.imageUrlForNewProject) {
                    this.props.handleChange('projectImage', e.target.files[0])
                  // }
                }
              }

            >
              <Avatar action={this.avatarChildUpdatesParent}/>
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
              label="Language"
              name="language"
            >
              <Select
                style={{ width: '100%' }}
                defaultValue=''
                placeholder="Please select"
                onChange={value => this.props.handleChange('languages', value, 'json')}
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