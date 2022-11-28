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


  // 增
  addItem = (newObj) => {
    const newTodos = [newObj, ...this.state.todos]
    this.setState({
      todos: newTodos
    })
  }

  // 删
  removeItem = (id) => {
    const newTodos = this.state.todos.filter(i => {
      return i.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  // 改变单个状态
  updateItem = (id, done) => {
    const newTodos = this.state.todos.map(i => {
      if (i.id === id) return { ...i, done }
      else return i
    })
    this.setState({
      todos: newTodos
    })
  }

  // 改变所有状态
  updataAll = (done) => {
    const newTodos = this.state.todos.map(i => {
      return { ...i, done }
    })
    this.setState({
      todos: newTodos
    })
  }

  // 删除所有完成(true)状态
  removeAllTrue = () => {
    const newTodos = this.state.todos.filter(i => {
      return i.done !== true
    })
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
          <List todos={todos} removeItem={this.removeItem} updateItem={this.updateItem} ></List>
          <Footer todos={todos} updataAll={this.updataAll} removeAllTrue={this.removeAllTrue} ></Footer>
        </div>
      </div>
    )
  }
}

export default App
