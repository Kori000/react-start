import axios from 'axios'
import React, { Component } from 'react'

import './App.css'

class App extends Component {

  getStudentData = () => {
    axios.get('http://127.0.0.1:3000/students').then(
      response => { console.log(response.data) },
      err => {
        console.log(err)
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.getStudentData}>
          获取学生信息
        </button>
      </div>
    )
  }
}

export default App
