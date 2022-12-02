import React, { Component } from 'react'
import './App.css'
export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: true,
    err: ''
  }



  updateState = (update) => {

    this.setState(update)
  }

  render () {


    return (
      <div className="container">
        666
      </div>
    )
  }
}
