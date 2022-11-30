import React, { Component } from 'react'
import './App.css'
import Search from './components/Header';
import List from './components/List';
export default class App extends Component {
  render () {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}
