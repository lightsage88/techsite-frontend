import React from 'react'
import axios from 'axios'



class LoginModal extends React.Component {
    constructor(){
        super()
        this.state = {
            usernameString: '',
            passwordString: ''
        }
    }

    updateState = (id, string) => {
        console.log(id, string)
        id === "username"
            ? this.setState({ usernameString: string })
            : this.setState({ passwordString: string})       
    }

    attemptLogin = e => {
        e.preventDefault()
        axios.post('/account/login', {
            username: this.state.usernameString,
            password: this.state.passwordString
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
       
    }

    render() {
        return(
            <form>
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
            <button
                onClick={e => this.attemptLogin(e)}
            >
                LOGIN
            </button>
        </form>
        )

    }

}

export default LoginModal