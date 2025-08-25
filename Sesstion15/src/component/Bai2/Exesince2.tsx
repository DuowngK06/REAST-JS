import React, { Component } from 'react'
type state = {}
color: string
tempColor: string

export default class Exesince2 extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: '',
            tempColor: '',
        };
        handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault
            this.setState({ tempColor: e.target.value });
        }
        render() {
            return (
                <div>
                    <from>action="</from>
                    <label htmlFor="">Color</label><br />
                    <input type="text" placeholder='nhap color' value={this.state.tempColor} onChange={this.handlechange} /><br />
                    <button onclick={this.handlecange}>Submit</button>
                </div>
            )
        }
    }
