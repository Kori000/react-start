import React, { Component } from 'react'
import './App.css'
import Search from './components/Header';
import List from './components/List';
export default class App extends Component {

  state = {
    users: []
  }

  getUserList = (listData) => {
    console.log(listData)
    this.setState({
      users: listData
    })
  }

  render () {

    const { users } = this.state

    return (
      <div className="container">
        <Search getUserList={this.getUserList} />
        <List users={users} />
      </div>
    )
  }
}
