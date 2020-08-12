import React from 'react'
import axios from 'axios'

class Projects extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    this.retrieveProjects()
  }

  retrieveProjects = () => {
    return axios.get('/projects')
    .then(response => {
      this.setState({ data: response.data })
    })
    .catch(err => {
      console.error(err)
    })
  }

  establishTechIcons = object => {
    console.log('running establish tech icons', object)
    console.log(typeof(object))
    // console.log(Object.values(object) || 'nada')
    return (
      <div>
        Frameworks
        <div>
          {Object.values(object)[0] || ''}
        </div>
        Languages
        <div>
          {Object.values(object)[1] || ''}
        </div>
        Testing
        <div>

        </div>
      </div>
    )
  }

  establishTechIconsTwo = (stateItem, index) => {
    console.log('establishTechIconsTwo running...')
    console.log(stateItem, index)
    
  }

  render() {
    const projects = (this.state.data).map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.summary}</p>
            <div>
              <h5>Technologies:</h5>
                {this.establishTechIconsTwo(item, index)}
              {/* {this.establishTechIcons(JSON.parse(item.technologies))} */}
            </div>
            <div>
              <h5>Links:</h5>
              <a href={item.projectLink}>Project Link</a>
              <br/>
              <a href={item.repoLink}>Repo Link</a>
            </div>
        </div>
      )
    })

    return (
      <div>
        <h1>
          Projects
        </h1>
        <div
          id="projectBox"
        >
          {projects}
        </div>
      </div>
    )
  }
}

export default Projects