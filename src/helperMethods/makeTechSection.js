import React from 'react'
import { base64ToImage } from './base64ToImage'


export const makeTechSection = (sectionName, array) => {
  console.log('we are making a techSection for' + sectionName)
  console.log('here is the array', array)
  let tech
  let section
  if(array.length > 0) {
    tech = array.map((item, index) => {
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

  section = <div><h3>{sectionName}</h3>{tech}</div>
  } else {
    tech = null
    section = null
  }

  return section
}