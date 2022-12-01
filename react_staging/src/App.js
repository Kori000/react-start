import React, { Component } from 'react'
import './App.css'
import Search from './components/Header';
import List from './components/List';
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
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}
