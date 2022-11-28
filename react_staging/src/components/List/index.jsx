import React, { Component } from 'react'
import './index.css'
import Item from '../List-item'
export default class List extends Component {


  render () {
    const { todos, removeItem, updateItem } = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map((todo) => {
              return <Item key={todo.id} {...todo} removeItem={removeItem} updateItem={updateItem} />
            })
          }
        </ul>
      </div>
    )
  }
}
