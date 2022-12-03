import React, { Component } from 'react'
import Demo from './components/Demo';
import Demo2 from './components/Demo2';



export default class App extends Component {


  render () {
    return (
      <div>
        <h1>函数式</h1>
        <Demo />
        <h1>Class</h1>
        <Demo2 />
      </div>
    )
  }
}
