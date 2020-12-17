import React from 'react'
import axios from 'axios'
import { SpinnerDotted } from 'spinners-react'

class Articles extends React.Component {
  constructor() {
    super()
    
    this.state = {
      mediumStories: [],
      loadingGoingOn: 1
    }
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps != this.props) {
      if(prevProps.mediumStories != this.props.mediumStories) {
        this.setState({
          mediumStories: this.props.mediumStories,
          loadingGoingOn: 0
        })
      }
    }
  }

  render() {
    const articleListItems = this.state.mediumStories.map(story => {
      return (
        <li>
          <a href={story.link} target="_blank">
            {story.title}
          </a>
        </li>
      )
    })
    return(
      <div id="articlesDiv">
        <h1>Articles</h1>
        {this.state.loadingGoingOn = 1 
          ? 
            <div>
              <ul id="articlesUL">
                {articleListItems}
                <li>
                  <a href="https://medium.com/@adrian.e.rosales" target="_blank">More Articles</a>
                </li>
              </ul>
            </div>
          : 
            <SpinnerDotted />
        } 
      </div>
    )
  }
}

export default Articles