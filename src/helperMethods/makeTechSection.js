import React from 'react'
import { base64ToImage } from './base64ToImage'
import { Tooltip } from 'antd'


export const makeTechSection = (sectionName, array) => {
  console.log('we are making a techSection for' + sectionName)
  console.log('here is the array', array)
  let name
  let tech
  let section
  if(array !== undefined && array.length > 0) {
    tech = array.map((item, index) => {
      let techImage = base64ToImage(item)
      
      return (
        <div key={index}>
          <a href={item.tech_website}>
            <Tooltip placement="topLeft" title={item.name} arrowPointAtCenter>
              <img className="iconImage" src={techImage} />
            </Tooltip>
          </a>
        </div>
      )
    })

  section = <div className="techSection">
              <h3>{sectionName}</h3>
                <div className="techRow">{tech}</div>
            </div>
  } else {
    tech = null
    section = null
  }

  return section
}