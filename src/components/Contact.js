import React from 'react'
var github = require('../images/github.svg')
var linkedin = require('../images/linkedin.svg')
var gmail = require('../images/google-gmail.svg')

class Contact extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div id="contactLand">
        <h1 className="sectionHead" id="contactSectionHead">
          Contact
        </h1>
        <div id="contactMethodDiv">
          <a href="mailto:adrian.e.rosales@gmail.com">
            <img className="contactMethodImages" src={gmail} />
          </a>
          <a href="https://github.com/lightsage88">
            <img className="contactMethodImages" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/adrian-rosales88/">
            <img className="contactMethodImages" src={linkedin} />
          </a>
        </div>
      </div>
    )
  }
}



export default Contact