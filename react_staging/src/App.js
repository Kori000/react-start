import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '敲代码', done: true }
    ]
  }

  // 增加 item
  addItem = (newItem) => {
    const { todos } = this.state
    let newTodos = [newItem, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  render () {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addItem={this.addItem} ></Header>
          <List todos={todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App
