import React from 'react'
import axios from 'axios'
import { base64ToImage } from '../helperMethods/base64ToImage'


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

  establishTechIconsTwo = (item, index) => {
    console.log('establishTechIconsTwo running...')
    console.log(item, index)
    let languages = [] 
    let frontEndFWS = []
    let backEndFWS = []
    let libraries = [] 
    let testingLibraries = [] 
    let uiFWS = [] 
    let CMS = [] 
    const technologies = []
    let techTypeAreas = []
    let techTypeIds = []
    const stateTech = this.state.techData || []
    let techMarkup = []
    //Compare the item.technology array elements against the tech_ids in the state
    item.technologies.forEach(number => {
      stateTech.forEach(item => {
        if(number == item.tech_id) {
          technologies.push(item)
        }
      })
    })
    console.log(technologies)
    technologies.forEach(item => {

      techTypeIds.push(item.technology_type_id)
      if(item.technology_type_id == 1) {
        languages.push(item)
      }
      if(item.technology_type_id == 2) {
        frontEndFWS.push(item)
      }
      if(item.technology_type_id == 3) {
        backEndFWS.push(item)
      }
      if(item.technology_type_id == 4) {
        libraries.push(item)
      }
      if(item.technology_type_id == 5) {
        testingLibraries.push(item)
      }
      if(item.technology_type_id == 6) {
        uiFWS.push(item)
      }
      if(item.technology_type_id == 7) {
        CMS.push(item)
      }
    })
    console.log(languages, frontEndFWS, backEndFWS, libraries, testingLibraries, uiFWS, CMS)
    //establish array of the type-zones we will create "Front End" "Language" "Library" we create based off of the matches
    techTypeAreas = new Set(techTypeIds)
    console.log(techTypeAreas)
    techTypeAreas.forEach(number => {
      let markupPiece = ''
      switch(number) {
        case 1:
          markupPiece = `
            <div className="languageArea">
              <h3>language</h3>
            </div>
          `
          techMarkup.push(markupPiece)
          break
        case 2: 
          markupPiece = `
            <div>
              <h3>front-end framework</h3>
            </div>
          `
          techMarkup.push(markupPiece)
          break
        case 3: 
          markupPiece = `
            <div>
              <h3>back-end framework</h3>
            </div>
          `
          techMarkup.push(markupPiece)
          break
        case 4: 
          markupPiece = `
            <div>
              <h3>library</h3>
            </div>
          `
          techMarkup.push(markupPiece)
          break
        case 5: 
          markupPiece = `
            <div>
              <h3>testing library</h3>
            </div>
          `
          techMarkup.push(markupPiece)
          break
        case 6: 
          markupPiece = `
            <div>
              <h3>ui framework</h3>
            </div>
          `
          techMarkup.push(markupPiece)
          break
        case 7: 
          markupPiece = `
              <div>
                <h3>content management system</h3>
              </div>
            `
            techMarkup.push(markupPiece)
            break
        default: 
          console.log('w/e')
      }
    })
    console.log('PAISHO', techMarkup)
    //return type-zones that show the tech-type, icons as clickable entries for the tech, tech name
  }

  render() {
    console.log('projects rendering', this.state)
    const projects = (this.state.data).map((item, index) => {
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
                  {this.establishTechIconsTwo(item, index)}
                {/* {this.establishTechIcons(JSON.parse(item.technologies))} */}
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