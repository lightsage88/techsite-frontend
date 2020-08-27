import React from 'react'
import LoginModal from './LoginModal'


class Users extends React.Component {
  constructor() {
    super()
    this.state={}
  }


  render() {
    let users = this.props.users

    return( 
      <>
      <h1>Users</h1>
          {users.map(user => <div key={user.id}>{user.username}</div>)}
          <button
            onClick={e => {
              console.log('we did a thingy')
              this.action()
          }}
          >
            Login
          </button>
          {
            this.props.showLoginModal
              ? <LoginModal ref={this.slmRef}/>
              : null
          }
      </>
    )
  }
}

export default Users