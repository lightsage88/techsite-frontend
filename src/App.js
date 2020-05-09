import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = () => {
    axios('/users')
      .then(data => {
        console.log(data)
        this.setState({ users: data.data })
      })
  }

  render() {
    let users = this.state.users
    return (
      <div className="App">
        <h1>Users</h1>
    {users.map(user => <div key={user.id}>{user.username}</div>)}
      </div>
    );
  }
}

export default App;
