import React from 'react'
import axios from 'axios'
import { base64ToImage } from '../helperMethods/base64ToImage'
var _ = require('lodash')


class Projects extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  UNSAFE_componentWillMount = () => {
    this.retrieveTechnologies()
  }

  componentDidMount = () => {
    this.retrieveProjects()
  }

  retrieveTechnologies = () => {
    return axios.get('/tech')
    .then(response => {
      this.setState({ techData: response.data})
    })
    .catch(err => {
      console.error(err)
    })
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

  getTechGroups = (item) => {
    let stateTech = this.state.techData || []
    let technologiesUsed = []

    item.technologies.forEach(number => {
      stateTech.forEach(item => {
        if(number == item.tech_id) {
          technologiesUsed.push(item)
        }
      })
    })

    technologiesUsed = technologiesUsed.sort((a,b) => (a.technology_type_id > b.technology_type_id) ? 1 : -1)
    console.log(technologiesUsed)


    console.log(  _.groupBy(technologiesUsed, 'technology_type_id'))
    let techGroups = _.groupBy(technologiesUsed, 'technology_type_id'.toString())
    return techGroups
  }



  render() {
    console.log('projects rendering', this.state)
    const projects = (this.state.data).map((item, index) => {
      let techGroups = this.getTechGroups(item)
      let languages = techGroups[1] || []
      let frontEndFWS = techGroups[2]
      let backEndFWS = techGroups[3]
      let libraries = techGroups[4]
      let testingLibraries = techGroups[5]
      let uiFWS = techGroups[6]
      let cms = techGroups[7]
      console.log(languages)
      
      const languageTech = languages.map((item,index)=> {
        let langImage = base64ToImage(item)
        return (
          <div key={index}>
            <a href={item.tech_website}>
              <img src={langImage} />
              {item.name}
            </a>
          </div>
        )
      })

      

      const imageSrc = base64ToImage(item)
      return (
        <div key={index}>
          <div className="projectIconDiv">
            <a href={item.projectlink}>
              <img className="projectIcon" src={imageSrc}/>
            </a>
          </div>
          <div className="projectDetails">
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
              <div>
                <h5>Technologies:</h5>
                {languageTech}
              </div>
              <div>
                <h5>Links:</h5>
                <a href={item.projectlink}>Project Link</a>
                <br/>
                <a href={item.repolink}>Repo Link</a>
              </div>
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