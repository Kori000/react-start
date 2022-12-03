import React, { Component } from 'react'
import './App.css'
import Count from './containers/Count'
import Person from './containers/Person'
export default class App extends Component {

  render () {
    return (
      <div>
        <Count />
        <Person />
      </div>
    )
  }
}
