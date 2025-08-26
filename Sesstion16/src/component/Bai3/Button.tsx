import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {
    render() {
        return (
            <div>
                <button id='btn1'>Primary</button>
                <button id='btn2'>Secondary</button>
                <button id='btn3'>Success</button>
                <button id='btn4'>warning</button>
                <button id='btn5'>Danger</button>
                <button id='btn6'>Info</button>
                <button id='btn7'>Light</button>
                <button id='btn8'>Dark</button>
                <a href="">link</a>
            </div>
        )
    }
}