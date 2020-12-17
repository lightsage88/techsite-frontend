import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import MenuComponent from './components/MenuComponent'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Users from './components/Users'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Articles from './components/Articles'
import LoginModal from './components/LoginModal'
import './App.css'
import './Svg.css'
import './About.css'
import './Articles.css'
import './Contact.css'
import './Projects.css'
import './Footer.css'
import './techSection.css'
import 'antd/dist/antd.css'



let Parser = require('rss-parser')
let parser = new Parser()

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      users: [],
      mediumStories: [],
      showLoginModal: false,
      loggedIn: false,
      feed: null
    }
    this.backendURL = "http://localhost:4007"
    this.slmRef = React.createRef()
    this.projectsRef = React.createRef()
  }
  

  componentDidMount = () => {
    if(process.env.NODE_ENV === "production") {
      this.backendURL = "https://sleepy-hollows-70516.herokuapp.com"
    }
    this.getUsers()
    this.getMediumStories()
  }

  componentDidUpdate = (prevState, prevProps) => {
    console.log('componentDidUpdate running...')
    if(prevState !== this.state) {
      console.log(this.state)
    }
  }

  

  getMediumStories = async () => {
    let stories = []
    // let feed = await parser.parseURL('https://medium.com/feed/@adrian.e.rosales')
    try {
      const mediumRssFeed = "https://medium.com/feed/@adrian.e.rosales"
      const rssToJsonApi =  "https://api.rss2json.com/v1/api.json"
      const data = {
        params: {
          rss_url: mediumRssFeed,
          api_key: 'jgeznkpdvfzhp9jsyruqdjnzozaumw9i4lc45qss'
        }
      }
      return await axios.get(rssToJsonApi, data)
      .then(response => {
        console.log(response)
        response.data.items.forEach(item => {
          if(item.title.toLowerCase().includes("codeviant")) {
            let entry = {
              title: item.title,
              link: item.link
            }
            stories.push(entry)
          }
        })
        this.setState({ mediumStories: stories})
      })

    } catch (error) {
      console.log(error)
    }
  }
  //make ref that changes the slm value

  toggleShowLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal })
  }

  toggleLoggedIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  getUsers = () => {
    // axios('https://sleepy-hollows-70516.herokuapp.com/users')
    axios(`${this.backendURL}/users`)
      .then(data => {
        this.setState({ users: data.data })
      })
  }

  determineModalAppearance = () => {

  }

  render() {
    return (
      <div className="App">
        <MenuComponent 
          toggleShowLoginModal={this.toggleShowLoginModal}
          toggleLoggedIn={this.toggleLoggedIn}
          loggedIn={this.state.loggedIn}
        />
        <Intro />
        {
          this.state.loggedIn
            ? <Header
                loggedIn={this.state.loggedIn}
              />
            : ''
        }
        {
          this.state.showLoginModal && !this.state.loggedIn
            ? <LoginModal 
                visible={this.state.showLoginModal}
                ref={this.slmRef}
                toggleShowLoginModal={this.toggleShowLoginModal}
                toggleLogIn={this.toggleLoggedIn}
              />
            : ''
          } 
          <About />
          <Projects ref={this.projectsRef}/>
          {/* <Articles mediumStories={this.state.mediumStories}/> */}
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;