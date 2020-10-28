import React, { Component } from 'react'
import '../App/App.css'

export default class Lead extends Component {
    constructor(props) {
        super(props)
        this.text = props.text
    }

    render(){
        return (
            <div className='top-menu-lead'>
                {this.text}
            </div>
        )
    }
}