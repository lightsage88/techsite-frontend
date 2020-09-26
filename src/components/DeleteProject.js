import React from 'react'
import axios from 'axios'
import { Button } from 'antd';


class DeleteProject extends React.Component {
  constructor() {
    super()
    this.backendURL = "http://localhost:4007"
  }

  componentDidMount = () => {
    if(process.env.NODE_ENV === "production") {
      this.backendURL = process.env.REACT_APP_BACKEND_URL
    }
  }

  deleteProject = id => {
    return axios.post(`${this.backendURL}/projects/delete`, {
      project_id: id
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const projects = this.props.projects.map((project, index) => {
      return (
        <div key={index}>
          <Button 
            type="primary" 
            danger
            onClick={()=> this.deleteProject(project.project_id)}
          >
            Delete
          </Button>
          <h1>{project.name}</h1>
        </div>
      )
    })

    return (
      <div>
        {projects}
      </div>
    )
  }
}

export default DeleteProject