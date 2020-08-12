import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import LoginModal from './components/LoginModal'
import Projects from './components/Projects'
import './App.css'
import 'antd/dist/antd.css'

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      users: [],
      showLoginModal: false,
      loggedIn: true
    }

    this.slmRef = React.createRef()
  }
  

  componentDidMount = () => {
    this.getUsers()
  }

  //make ref that changes the slm value


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
    let users = this.state.users
    return (
      <div className="App">
        {
          this.state.loggedIn
            ? <Header
                loggedIn={this.state.loggedIn}
              />
            : ''
        }
        <h1>Users</h1>
          {users.map(user => <div key={user.id}>{user.username}</div>)}
          <button
            onClick={e => this.setState({ showLoginModal: true })}
          >
            Login
          </button>
          {
            this.state.showLoginModal
              ? <LoginModal ref={this.slmRef}/>
              : ''
          }
          <Projects />
      </div>
    );
  }
}

export default App;
