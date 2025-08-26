import React, { Component } from 'react'


export default class LoginStatus extends Component {
    state = {
        isLoggedIn: false
    }

    toggleLogin = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }
    render() {
        return (
            <div>
                {this.state.isLoggedIn ? (`Xin chao User`) : (`Vui long dang nhap`)}
                <br></br>
                <button onClick={this.toggleLogin}>
                    {this.state.isLoggedIn ? `Logout` : `Login`}
                </button>
            </div>
        )
    }
}