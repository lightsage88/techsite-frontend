import React from 'react'
const headshot = require('../../src/images/adrianRosalesHeadshot19.jpg')

class About extends React.Component {
  constructor() {
    super()
    this.state={}
  }

  render() {
    return (
      <div id="aboutLand">
        <h1 className="sectionHead" id="aboutLandHead">About Adrian</h1>
        <img id="aboutHeadshot" src={headshot} alt="adrianRosales"/>
        <p>
        I grew up in Portland, OR and earned my Bachelors and Masters of Music degrees in Operatic Performance at the University of Southern California. 
        Since graduating, I have enjoyed a busy performance schedule across the country, but felt my innate curiosity and joy for working with technology was being neglected. 
        <br/>
        To fill in the gaps in my performance schedule, I had driven for Uber/Lyft, became a licensed tax preparer, and even a fish monger...but ever since my youth I had always been mesmerized by the animations and graphics I saw on websites and knew that I would feel sad if I had never gotten the opportunity to learn how those work and to make them happen myself.
        I thought pursuing a course of study rooted in web development would offer me the well-roundedness I sought. Enrolling in Thinkful's full-stack web development course has proven to be one of the more fulfilling, joyful, and engaging choices I have made and I look forward to where my work in web development will take me!

        </p>
      </div>
    )
  }
}

export default About