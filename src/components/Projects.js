import React from 'react'
import axios from 'axios'
import { Card, Collapse } from 'antd'
import { base64ToImage } from '../helperMethods/base64ToImage'
import { makeTechSection } from '../helperMethods/makeTechSection'
var _ = require('lodash')
const { Panel } = Collapse
const { Meta } = Card

class Projects extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
    this.myRef = React.createRef()
    this.backendURL = "http://localhost:4007"
  }

  UNSAFE_componentWillMount = () => {
    this.retrieveTechnologies()
  }

  componentDidMount = () => {
    if(process.env.NODE_ENV === "production") {
      this.backendURL = process.env.REACT_APP_BACKEND_URL
    }
    this.retrieveProjects()
  }

  retrieveTechnologies = () => {
    return axios.get(`${this.backendURL}/tech`)
    .then(response => {
      this.setState({ techData: response.data})
    })
    .catch(err => {
      console.error(err)
    })
  }

  retrieveProjects = () => {
    return axios.get(`${this.backendURL}/projects`)
    .then(response => {
      this.setState({ data: response.data })
    })
    .catch(err => {
      console.error(err)
    })
  }

  establishTechIcons = object => {
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
    let techGroups = _.groupBy(technologiesUsed, 'technology_type_id'.toString())
    return techGroups
  }

  collapseCB = (key) => {
    console.log(key)
  }

  render() {
    const projects = (this.state.data).map((item, index) => {
      let techGroups = this.getTechGroups(item)
      let languages = techGroups[1] || []
      let frontEndFWS = techGroups[2]
      let backEndFWS = techGroups[3]
      let libraries = techGroups[4]
      let testingLibraries = techGroups[5]
      let uiFWS = techGroups[6]
      let cms = techGroups[7]
      let database = techGroups[8]
      let ci = techGroups[9]
      const imageSrc = base64ToImage(item)
 
      return (
        <div className="projectEntry" key={index}>
          <Card 
            hoverable
            style={index % 2 == 0 ? {background: ''} : {background: 'cyan'}}
          >
            <a href={item.projectlink}>
              <div className="projectLinkDiv">
                <Meta title={item.name} />
                <img className="projectIcon" src={imageSrc}/>
              </div>
            </a>
            <Collapse defaultActiveKey={['1']} onChange={this.collapseCB}>
              <Panel showArrow={false} className="panelTitle" header="Description" key="1" disabled>
                <p className="projectDescriptionP">{item.summary}</p>
              </Panel>
              <Panel className="panelTitle" header="Links" key="2">
                <ul className="projectLinksUL">
                  <li><a href={item.projectlink}>Project Link</a></li>
                  <li><a href={item.repolink}>Repo Link</a></li>
                </ul>
                
              </Panel>
              <Panel className="panelTitle" header="Tech" key="3">
                {makeTechSection("Languages", languages)}
                {makeTechSection("Front-End Frameworks", frontEndFWS)}
                {makeTechSection("Back-End Frameworks", backEndFWS)}
                {makeTechSection("Libraries", libraries)}
                {makeTechSection("Testing Libraries", testingLibraries)}
                {makeTechSection("UI Frameworks", uiFWS)}
                {makeTechSection("Content Management Systems", cms)}
                {makeTechSection("Databases", database)}
                {makeTechSection("Continuous Integrations", ci)}
              </Panel>
            </Collapse>
          </Card>
        </div>
      )
    })

    return (
      <div id="projectLand">
        <h1 className="sectionHead" id="projectsSectionHead">
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