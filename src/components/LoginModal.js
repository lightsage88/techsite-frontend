import React from 'react'
import axios from 'axios'
import { Modal } from 'antd'



class LoginModal extends React.Component {
    constructor(){
        super()
        this.state = {
            usernameString: '',
            passwordString: ''
        }
    }

    updateState = (id, string) => {
        id === "username"
            ? this.setState({ usernameString: string })
            : this.setState({ passwordString: string})       
    }

    attemptLogin = e => {
        e.preventDefault()
        axios.post('https://sleepy-hollows-70516.herokuapp.com//users/login', {
            username: this.state.usernameString,
            password: this.state.passwordString
        })
        .then(response => {
            console.log(response)
            if(response.status === 200) {
              console.log('success is ours!!')
              this.props.toggleLogIn()
            }
        })
        .catch(error => {
            console.log(error)
        })
       
    }

  render() {
    return(
      <div id="loginModalDiv">
        <Modal
          title="LOGIN"
          visible={this.props.visible}
          okText="LOGIN"
          onOk={e => this.attemptLogin(e)}
          onCancel={this.props.toggleShowLoginModal}
        >
          <h2>Username</h2>
          <input
            id='loginModalUsername'
            type='text'
            onChange={e => this.updateState('username', e.target.value)}
          />
          <h2>Password</h2>
          <input 
            id="loginModalPassword"
            type='password'
            onChange={e => this.updateState('password', e.target.value)}
          />
        </Modal>
      </div>
    )

    }

}

export default LoginModal