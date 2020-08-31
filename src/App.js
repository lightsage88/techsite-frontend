import React from 'react'
import axios from 'axios'
// import {ReactComponent as PhilanthropyLogo} from './svgs/philanIcon.svg'
import Header from './components/Header'
import MenuComponent from './components/MenuComponent'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Users from './components/Users'
import About from './components/About'
import Contact from './components/Contact'
import LoginModal from './components/LoginModal'
import Projects from './components/Projects'
import './App.css'
import './Svg.css'
import './About.css'
import './Contact.css'
import './Projects.css'
import './Footer.css'
import './techSection.css'
import 'antd/dist/antd.css'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      users: [],
      showLoginModal: false,
      loggedIn: false
    }

    this.slmRef = React.createRef()
    this.projectsRef = React.createRef()
  }
  

  componentDidMount = () => {
    this.getUsers()
  }

  //make ref that changes the slm value

  toggleShowLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal })
  }

  toggleLoggedIn = () => {
    console.log('toggleLoggedIn is running')
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  getUsers = () => {
    axios('/users')
      .then(data => {
        
        console.log(data)
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
       
        {/* <h1>Users</h1>
          {users.map(user => <div key={user.id}>{user.username}</div>)}
          <button
            onClick={e => this.setState({ showLoginModal: true })}
          >
            Login
          </button>
        */}
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
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;
